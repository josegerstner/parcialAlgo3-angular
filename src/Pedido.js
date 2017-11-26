class Pedido{
    constructor(empanada,cantidad){
        this.empanada=empanada
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