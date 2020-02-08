/* 
 * ✅ Use the Coinlore API (Coins) 
 *    https://www.coinlore.com/cryptocurrency-data-api
 * 
 *    Get 10 coins per "page"
 */

 let proxyUrl = "https://calm-spire-67840.herokuapp.com/"; //for bypassing proxy errors.
 let url = " https://api.coinlore.com/api/tickers/?start=10&limit=10";

fetch(url)
	.then((response) => {
		return response.json();
	})
	.then((response) => {
		console.log(response);

		return loadData(response);

	})
	.catch((error) => {
		console.log("error: ", error.message);
	})

let loadData = (data) => {
	setTimeout(function() {
		var tablebody = document.getElementsByTagName("tbody")[0];

		    data.data.forEach(function(item) {
		        var tr = document.createElement('tr');

		        tr.innerHTML = '<td>' + item.name + '</td>' +
		        '<td>' + item.symbol + '</td>' +
		        '<td>' + item.price_usd + '</td>' +
		        '<td>' + item.tsupply + '</td>';
		        tablebody.appendChild(tr);
		    });

	}, 100)
}
