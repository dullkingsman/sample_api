import { User as model} from './user_model';

export const me = async (req, res) => {
    res.status(200).json({ data: req.body })
}

export const getOne = async (req, res) => {
    try {
      const unit = await model
        .findOne({ _id: req.params.id })
        .lean()
        .exec()
  
      if (!unit) {
        return res.status(404).send({ error: `No such user` });
      }
  
      return res.status(200).json({ data: {...unit, ff: req.args} })
    } catch (e) {
      console.error(e)
      return res.status(400).send({ error: `Internal Server Error.` })
    }
  }
  
export const updateOne = async (req, res) => {
    try {
      const updatedUnit = await model
        .findOneAndUpdate(
          {
            _id: req.params.id
          },
          req.body,
          { new: true }
        )
        .lean()
        .exec()
  
      if (!updatedUnit) {
        return res.status(400).end()
      }
  
      return res.status(200).json({ data: updatedUnit })
    } catch (e) {
      console.error(e)
      return res.status(400).end()
    }
  }
  
  export const crudControllers = {
    updateOne,
    getOne,
    me
  };