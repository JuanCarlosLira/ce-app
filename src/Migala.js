import React, {Component} from 'react'

class Migala extends Component{
  state = {
    p1: "la",
    p2: " ",
    p3: "migala"
  }

  p1() {
    if (this.state.p1 === "la") {
      this.setState({p1: "La"});
    } else {
      this.setState({p1: "la"});
    }
  }
  p2() {
    if (this.state.p2 === " ") {
      this.setState({p2: ", "});
    } else {
      this.setState({p2: " "});
    }
  }
  p3() {
    if (this.state.p3 === "migala") {
      this.setState({p3: "Migala"});
    } else {
      this.setState({p3: "migala"});
    }
  }

  render() {
    return(
      <div id="crucigramaWrap">
        <p>Escribe en el siguiente texto los signos de puntuación y las mayúsculas correspondientes.</p>
        <h1 align="center">LA MIGALA</h1>
        <h2 align="center">Juan José Arreola</h2>
        <p>la migala discurre libremente por la casa, pero mi capacidad de horror no disminuye.</p>
        <p>la migala discurre libremente por la casa, pero mi capacidad de horror no disminuye.
        el día en que Beatriz y yo entramos en aquella barraca inmunda de la feria callejera, me di cuenta de que la repulsiva alimaña era lo más atroz que podía depararme el destino, Peor que el desprecio y la conmiseración brillando de pronto en una clara mirada.
        unos días más tarde volví para comprar la migala, y el sorprendido saltimbanqui me dio algunos informes acerca de sus costumbres y su alimentación extraña. entonces comprendí que tenía en las manos, de una vez por todas, la amenaza total, la máxima dosis de terror que mi espíritu podía soportar. recuerdo mi paso tembloroso, vacilante, cuando de regreso a la casa sentía el peso leve y denso de la araña, ese peso del cual podía descontar, con seguridad, el de la caja de madera en que la llevaba, como si fueran dos pesos totalmente diferentes: el de la madera inocente y el del impuro y ponzoñoso animal que tiraba de mí como un lastre definitivo, Dentro de aquella caja iba el infierno personal que instalaría en mi casa para destruir, para anular al otro, el descomunal infierno de los hombres.
        la noche memorable en que solté a la migala en mi departamento y la vi correr como un cangrejo y ocultarse bajo un mueble, ha sido el principio de una vida indescriptible. desde entonces, cada uno de los instantes de que dispongo ha sido recorrido por los pasos de la araña, que llena la casa con su presencia invisible.
        todas las noches tiemblo en espera de la picadura mortal. muchas veces despierto con el cuerpo helado, tenso, inmóvil, porque el sueño ha creado para mí, con precisión, el paso cosquilleante de la aralia sobre mi piel, su peso indefinible, su consistencia de entraña. Sin embargo, siempre amanece. estoy vivo y mi alma inútilmente se apresta y se perfecciona.
        hay días en que pienso que la migala ha desaparecido, que se ha extraviado o que ha muerto. Pero no hago nada para comprobarlo. Dejo siempre que el azar me vuelva a poner frente a ella, al salir del baño, o mientras me desvisto para echarme en la cama. a veces el silencio de la noche me trae el eco de sus pasos, que he aprendido a oír, aunque sé que son imperceptibles.
        Muchos días encuentro intacto el alimento que he dejado la víspera. cuando desaparece, no sé si lo ha devorado la migala o algún otro inocente huésped de la casa. He llegado a pensar también que acaso estoy siendo víctima de una superchería y que me hallo a merced de una falsa migala. tal vez el saltimbanqui me ha engañado, haciéndome pagar un alto precio por un inofensivo y repugnante escarabajo.
        Pero en realidad esto no tiene importancia, porque yo he consagrado a la migala con la certeza de mi muerte aplazada. en las horas más agudas del insomnio, cuando me pierdo en conjeturas y nada me tranquiliza, suele visitarme la migala. Se pasea embrolladamente por el cuarto y trata de subir con torpeza a las paredes. Se detiene, levanta su cabeza y mueve los palpos. Parece husmear, agitada, un invisible compañero.
        Entonces, estremecido en mi soledad, acorralado por el pequeño monstruo, recuerdo que en otro tiempo yo soñaba en Beatriz y en su compañía imposible.
        </p>

        <button id="txtBut" onClick={this.p1.bind(this)}>{this.state.p1}</button>
        <button id="txtBut" onClick={this.p2.bind(this)}>{this.state.p2}</button>
        <button id="txtBut" onClick={this.p3.bind(this)}>{this.state.p3}</button>
        <button id="txtBut">&nbsp;</button>
        <button id="txtBut">discurre</button>
        <button id="txtBut">&nbsp;</button>
        <button id="txtBut">libremente</button>
        <button id="txtBut">&nbsp;</button>
        <button id="txtBut">por</button>
        <button id="txtBut">&nbsp;</button>
        <button id="txtBut">la</button>
        <button id="txtBut">&nbsp;</button>
        <button id="txtBut">casa</button>
        <button id="txtBut">,&nbsp;</button>
      </div>
    );
  }
}

export default Migala
