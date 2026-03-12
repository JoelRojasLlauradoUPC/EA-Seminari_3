import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IOrganizacion {
    name: string;
    usuarios?: Types.ObjectId[];
}

export interface IOrganizacionModel extends IOrganizacion, Document {}

const OrganizacionSchema: Schema = new Schema(
    {
        name: { type: String, required: true }
    },
    {
        versionKey: false,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

OrganizacionSchema.virtual('usuarios', {
    ref: 'Usuario',
    localField: '_id',
    foreignField: 'organizacion',
    justOne: false
});

export default mongoose.model<IOrganizacionModel>('Organizacion', OrganizacionSchema);
