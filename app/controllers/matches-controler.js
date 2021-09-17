import faceitAxios from '../axios/faceit.js';


class MatchesController {   
    
  
    async GetUserMatch(req, res){

      let step;
      let info = []
      let offset = 0;
      let isStatusOK = true;
      let reque = [];
      let matchArr = [];

      try {
        while (isStatusOK) {
          // console.log('Idę na zachód ' + step +' krok i ' +offset+ ' cm');
          const data = await faceitAxios.get(`https://open.faceit.com/data/v4/players/994c72ba-005d-43ff-a557-103ee548241a/history?game=csgo&offset=${offset}&limit=100`) 
          isStatusOK = data.status === 200 ? true : false;     
          if(isStatusOK){
            info.push(data.data)
            offset = offset + 100;   
            step = step + 1;  
          console.log('Idę na zachód ' + step +' krok i ' +offset+ ' cm');
          }         
        }   
        
        
        
        
        
      } catch (error) {
        
      }     

      info.forEach(element => {
        for (let index = 0; index < element.items.length; index++) {
          reque.push(element.items[index].match_id)          
        }
      });
      res.send(reque)

      
  }
  
}




export default new MatchesController();