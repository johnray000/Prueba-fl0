let promedio = 0;

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('getMessage').onclick = () => {
    fetch('https://criptoya.com/api/binancep2p/sell/usdt/ars/10')
      .then(response => response.json())
      .then(json => {
        promedio = json.data.reduce((sum, a) => sum + (Number(a.adv.price)), 0) / json.data.length;
        console.log(parseFloat(promedio.toFixed(1)))
        document.getElementById('message').innerHTML = parseFloat(promedio.toFixed(2));
        document.getElementById('message').classList.add('box-result');
        document.getElementById('mensajito').innerHTML = `Debes multiplicar en valor por el monto q deseas enviar Ejemplo: 10.000 pesos x ${parseFloat(promedio.toFixed(2))} = ${parseFloat(promedio.toFixed(2)) * 10000} Bs`;
      })
  };
});
