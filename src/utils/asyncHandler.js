const asycnHanlder = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asycnHanlder };

// const asycnHanlder = (fn)=>async(req,res,next)=>{
//   try {
//     await fn(req,res,next);
//   } catch (error) {
//     res.status(error.code ||500).json({
//       success:false,
//       message:error.message
//     })
//   }
// }
