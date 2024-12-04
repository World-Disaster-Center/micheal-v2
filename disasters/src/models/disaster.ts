import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface DisastersAttrs {
  name: string;
  userId: string;
}

interface DisastersDoc extends mongoose.Document {
  name: string;
  userId: string;
  version: number;
}

interface DisasterModel extends mongoose.Model<DisastersDoc> {
  build(attrs: DisastersAttrs): DisastersDoc;
}

const disasterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

// Implementing optimistic concurrency control
// to increment the version number
disasterSchema.set('versionKey', 'version');
disasterSchema.plugin(updateIfCurrentPlugin);

disasterSchema.statics.build = (attrs: DisastersAttrs) => {
  return new Disaster(attrs);
};

const Disaster = mongoose.model<DisastersDoc, DisasterModel>(
  'Disaster',
  disasterSchema
);

export { Disaster };
