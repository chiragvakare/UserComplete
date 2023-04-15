export const list = async (request,response,next) => {
    try{ 
     let categoires = await Category.findAll();
     return response.status(200).json({categories: categoires, status: true});
    }
    catch(err){
       return response.status(500).json({error: "Internal server error", status: false});
    } 
   }