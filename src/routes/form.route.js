import { Router } from "express";
import { deleteFormData, getFormData, setFormData, updateFormData } from "../controllers/form.controllers.js";

const formRoutes = Router();

formRoutes.get("/",getFormData);
formRoutes.post("/",setFormData);
formRoutes.put("/:id",updateFormData);
formRoutes.delete("/:id",deleteFormData);

export default formRoutes;