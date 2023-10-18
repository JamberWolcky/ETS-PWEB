const ElementID = document.getElementById("result");
const Url = "http://it-its.id/api/movies";

function Card(Title, Plot) {
  //styling cards
  const cardHTML = `
      <div class="col-sm-12 mb-3 col-lg-2 col-12 col-md-3" style="margin-top: 20px; margin-bottom: 20px">
        <div class="w3-border w3-hover-shadow" style="border-radius: 5px;">
          <div class="w3-card-4">
            <div class="row no-gutters align-items-center">
              <div class="col mr-5 ">
                <div class="mb-1" style="margin-right: 10px; margin-left : 10px;">
                  <b>${Title}</b>
                </div>
                <div class="mb-1 font-weight-normal text-black" style="margin-left : 10px">${Plot}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

  ElementID.innerHTML += cardHTML;
}

fetch(Url)
  .then((response) =>
    // menangkap response
    {
      if (!response.ok) {
        //chek status
        throw new Error("Network response error");
      }
      return response.json(); //return jika ok
    }
  )
  .then(
    (
      data //menangkap data json
    ) => {
      for (let index = 0; index < 10; index++) // karna ada 11 data dalam api
      {
        const Title = data[index].Title;
        const Plot = data[index].Plot;
        Card(Title, Plot); //panggil fungsi cards
      }
    }
  )
  .catch((error) => console.error("Error:", error)); //menangkap error