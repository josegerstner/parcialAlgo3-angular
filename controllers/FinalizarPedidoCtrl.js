class FinalizarPedidoCtrl{
    constructor(HacerPedidoSrvc){
        this.HacerPedidoSrvc = HacerPedidoSrvc
        this.pedido=HacerPedidoSrvc.getPedidosSinCero()
        this.cantEmpanadasTotal = 0
        this.precioTotal = 0
    }
    getPrecioTotal() {
        for(i=0; i<this.pedido.size; i++){
            if(this.pedido.get(i).valor>0){
                this.precioTotal += this.pedido.get(i).valor
            }
        }
        return this.precioTotal
    }
    getCantEmpanadasTotal(){
        for (i; i<this.pedido.size; i++){
            this.cantEmpanadasTotal+=this.pedido.get(i).cantidad
        }
        return this.cantEmpanadasTotal
    }
}