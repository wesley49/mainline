var home;
var graficos;
var suporte;
var linhas;

var Boxhome;
var Boxgraficos;
var Boxsuporte;
var Boxlinhas;



$(document).ready(function() {


Boxhome=$("#Home");
Boxgraficos=$("#Analytcs");
Boxsuporte=$("#Suporte");
Boxlinhas=$("#Linhas");

home=$("#home");
graficos=$("#graficos");
suporte=$("#suporte");
linhas=$("#linhas");

Boxhome.show();
Boxgraficos.hide();
Boxsuporte.hide();
Boxlinhas.hide();


// HOME
home.click(function() {
  Boxhome.show();
  Boxgraficos.hide();
  Boxsuporte.hide();
  Boxlinhas.hide();
});

// LINHAS
linhas.click(function() {
  Boxhome.hide();
  Boxgraficos.hide();
  Boxsuporte.hide();
  Boxlinhas.show();
});

// GRAFICOS
graficos.click(function() {
  Boxhome.hide();
  Boxgraficos.show();
  Boxsuporte.hide();
  Boxlinhas.hide();
});

// SUPORTE
suporte.click(function() {
  Boxhome.hide();
  Boxgraficos.hide();
  Boxsuporte.show();
  Boxlinhas.hide();
});




});
