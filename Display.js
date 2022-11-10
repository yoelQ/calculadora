class Display {
    constructor(displayValorAnterior, displayValorActual) {
        
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
          sumar: '+',
          dividir: '/',
          multiplicar: 'x',
          restar: '-', 
          
        }
    }
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
    A_binario(){
        this.valorAnterior = this.valorActual;
        this.valorActual = parseInt(this.valorActual).toString(2);
        this.imprimirValores();
    }
    A_octal(){
        this.valorAnterior = this.valorActual;
        this.valorActual = parseInt(this.valorActual).toString(8);
        this.imprimirValores();
    }
    A_hexadecimal(){
        this.valorAnterior = this.valorActual;
        this.valorActual = parseInt(this.valorActual).toString(16);
        this.imprimirValores();
    }
    bi_decimal(){
        this.valorAnterior = this.valorActual;
        this.valorActual = parseInt(this.valorActual,2);
        this.imprimirValores();
    }
    oct_decimal(){
        this.valorAnterior = this.valorActual;
        this.valorActual = parseInt(this.valorActual,8);
        this.imprimirValores();
    }
    gravedad(){
        this.valorActual = this.valorActual.toString() + 9.81.toString();
        this.imprimirValores();
    }
    seg_hr(){
        this.valorAnterior = this.valorActual;
        this.valorActual = this.valorActual / 3600;
        this.imprimirValores();
    }
    min_hr(){
        this.valorAnterior = this.valorActual;
        this.valorActual = this.valorActual / 60;
        this.imprimirValores();
    }
    hr_min(){
        this.valorAnterior = this.valorActual;
        this.valorActual = this.valorActual * 60;
        this.imprimirValores();
    }
    seg_min(){
        this.valorAnterior = this.valorActual;
        this.valorActual = this.valorActual / 60;
        this.imprimirValores();
    }
    hr_seg(){
        this.valorAnterior = this.valorActual;
        this.valorActual = this.valorActual * 3600;
        this.imprimirValores();
    }
    min_seg(){
        this.valorAnterior = this.valorActual;
        this.valorActual = this.valorActual * 60;
        this.imprimirValores();
    }
}