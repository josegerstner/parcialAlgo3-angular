class Empanada{
    constructor(gusto){
        this.gusto=gusto
        this.valor=20
    }
}
class Pedido{
    constructor(empanada,cantidad){
        this.valor=empanada.valor
        this.gusto=empanada.gusto
        this.cantidad=cantidad
    }
    sumarCantidad(){
        this.cantidad+=1
    }
    restarCantidad(){
        if(this.cantidad>0){
            this.cantidad-=1
        }else{
            this.cantidad=0
        }
    }
}
class HacerPedidoSrvc{
    constructor(){
        this.cantEmpanadasTotal=0
        this.precioTotal=0
        this.pedido = [
            new Pedido(new Empanada('CARNE LA REINA'),2),
            new Pedido(new Empanada('QUESO Y CEBOLLA'),0),
            new Pedido(new Empanada('ROQUEFORT Y APIO'),1),
            new Pedido(new Empanada('HUMITA'),1),
            new Pedido(new Empanada('ATUN'),0),
            new Pedido(new Empanada('CAPRESE'),0)
        ]
    }
    // getPrecioTotal() {
    //     for(i=0; i<this.pedido.size; i++){
    //         if(this.pedido.get(i).valor>0){
    //             this.precioTotal += this.pedido.get(i).valor
    //         }
    //     }
    //     return this.precioTotal
    // }
    // getCantEmpanadasTotal(){
    //     for (i; i<this.pedido.size; i++){
    //         this.cantEmpanadasTotal+=this.pedido.get(i).cantidad
    //     }
    //     return this.cantEmpanadasTotal
    // }
    getPedidosSinCero(){
        this.pedido.filter(this.tieneCantidad)
    }
    tieneCantidad(valor){
        return valor.cantidad>0
    }
}