import mongoose from 'mongoose';
import Usuario, { IUsuarioModel, IUsuario } from '../models/Usuario';

const createUsuario = async (data: Partial<IUsuario>): Promise<IUsuarioModel> => {
    const usuario = new Usuario({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return await usuario.save();
};

const getUsuario = async (usuarioId: string): Promise<IUsuarioModel | null> => {
    return await Usuario.findById(usuarioId).populate('organizacion');
};

const getAllUsuarios = async (): Promise<IUsuarioModel[]> => {
    return await Usuario.find().populate('organizacion');
};

const updateUsuario = async (usuarioId: string, data: Partial<IUsuario>): Promise<IUsuarioModel | null> => {
    const usuario = await Usuario.findById(usuarioId);
    if (usuario) {
        usuario.set(data);
        return await usuario.save();
    }
    return null;
};

const deleteUsuario = async (usuarioId: string): Promise<IUsuarioModel | null> => {
    return await Usuario.findByIdAndDelete(usuarioId);
};

const removeUsuarioOrganizacion = async (usuarioId: string): Promise<IUsuarioModel | null> => {
    return await Usuario.findByIdAndUpdate(
        usuarioId,
        { $set: { organizacion: null } },
        { new: true, runValidators: false }
    );
};

export default { createUsuario, getUsuario, getAllUsuarios, updateUsuario, deleteUsuario, removeUsuarioOrganizacion };