import  { useEffect ,useState} from 'react';

function Effect() {
    const [data, setData] = useState();

   
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await fetch("https://dummyjson.com/quotes");
          const jsonData = await response.json()
          setData([{jsonData}]);
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      };
  console.log(data);
  let quotes = data.map(item => item.jsonData.quotes)
 console.log(quotes);
 

  return (
    <div>
      {
        quotes[0].map((e)=>(
            <h1>{e.quote}</h1>
        ))
      }
    </div>
  );
}

export default Effect;
