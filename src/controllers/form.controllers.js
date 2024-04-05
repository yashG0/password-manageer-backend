import { Form } from "../models/form.models.js";

const getFormData = async (req, res) => {
    try {
        const forms = await Form.find({});
        if (!forms) {
            return res.status(500).json({ success: false, message: "failed to get your data" });
        }
        return res.status(200).json({ success: true, data: forms, message: "data Fetch Successfully" });
    } catch (error) {
        return res.status(404).json({ success: false, message: error.message });
    }
};

const setFormData = async (req, res) => {
    try {
        const newForm = await Form.create(req.body);
        return res.status(200).json({ success: true, data: newForm, message: "data saved Successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const updateFormData = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedForm = await Form.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedForm) {
            return res.status(404).json({ success: false, message: "failed to update your data" });
        }
        return res.status(200).json({ success: true, data: updatedForm, message: "data updated Successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const deleteFormData = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedForm = await Form.findByIdAndDelete(id);
        if (!deletedForm) {
            return res.status(404).json({ success: false, message: "failed to delete your data" });
        }
        return res.status(200).json({ success: true, data: deletedForm, message: "data Deleted Successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { getFormData, setFormData, updateFormData, deleteFormData };
