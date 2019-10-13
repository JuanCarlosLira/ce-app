public class MyClass {
    public static void main(String args[]) {
        int i=1001;

        while (i<1201) {
            System.out.println("p"+i+": \"\",");
            i++;
        }

        //

        /*
        todas las noches tiemblo en espera de la picadura mortal. muchas veces despierto con el cuerpo helado, tenso, inmóvil,
        porque el sueño ha creado para mí, con precisión, el paso cosquilleante de la aralia sobre mi piel, su peso indefinible,
        su consistencia de entraña. Sin embargo, siempre amanece. estoy vivo y mi alma inútilmente se apresta y se perfecciona.
        */

        /*int cont = 616;

        String s = "estoy vivo y mi alma inútilmente se apresta y se perfecciona";
        String[] arr = s.split(" ");

        for ( String ss : arr) {
            String cap = ss.substring(0, 1).toUpperCase() + ss.substring(1);

            System.out.println("p"+cont+"() {");
            System.out.println("\tif (this.state.p"+cont+" === \" \") {this.setState({p"+cont+": \", \"});}");
            System.out.println("\tif (this.state.p"+cont+" === \", \") {this.setState({p"+cont+": \"; \"});}");
            System.out.println("\tif (this.state.p"+cont+" === \"; \") {this.setState({p"+cont+": \": \"});}");
            System.out.println("\tif (this.state.p"+cont+" === \": \") {this.setState({p"+cont+": \"( \"});}");
            System.out.println("\tif (this.state.p"+cont+" === \"( \") {this.setState({p"+cont+": \") \"});}");
            System.out.println("\tif (this.state.p"+cont+" === \") \") {this.setState({p"+cont+": \"¡ \"});}");
            System.out.println("\tif (this.state.p"+cont+" === \"¡ \") {this.setState({p"+cont+": \"! \"});}");
            System.out.println("\tif (this.state.p"+cont+" === \"! \") {this.setState({p"+cont+": \"¿ \"});}");
            System.out.println("\tif (this.state.p"+cont+" === \"¿ \") {this.setState({p"+cont+": \"? \"});}");
            System.out.println("\tif (this.state.p"+cont+" === \"? \") {this.setState({p"+cont+": \" \"});}");
            System.out.println("}");
            cont++;

            System.out.println("p"+cont+"() {");
            System.out.println("\tif (this.state.p"+cont+" === \""+ss+"\") {");
            System.out.println("\t\tthis.setState({p"+cont+": \""+cap+"\"});");
            System.out.println("\t} else {");
            System.out.println("\t\tthis.setState({p"+cont+": \""+ss+"\"});");
            System.out.println("\t}");
            System.out.println("}");
            cont++;
        }*/

        /*
        todas las noches tiemblo en espera de la picadura mortal. muchas veces despierto con el cuerpo helado, tenso, inmóvil,
        porque el sueño ha creado para mí, con precisión, el paso cosquilleante de la aralia sobre mi piel, su peso indefinible,
        su consistencia de entraña. Sin embargo, siempre amanece. estoy vivo y mi alma inútilmente se apresta y se perfecciona.
        */

        /*int cont = 636;

        String s = "perfecciona remove";
        String[] arr = s.split(" ");

        for ( String ss : arr) {
            System.out.println("{this.state.p"+cont+" === \" \" &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}>&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \", \" && this.state.compare === false &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}>,&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \"; \" && this.state.compare === false &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}>;&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \": \" && this.state.compare === false &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}>:&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \"( \" && this.state.compare === false &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}>(&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \") \" && this.state.compare === false &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}>)&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \"¡ \" && this.state.compare === false &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}>¡&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \"! \" && this.state.compare === false &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}>!&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \"¿ \" && this.state.compare === false &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}>¿&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \"? \" && this.state.compare === false &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}>?&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \", \" && this.state.compare === true &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}><span style={{color:\"red\"}}>,</span>&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \"; \" && this.state.compare === true &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}><span style={{color:\"red\"}}>;</span>&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \": \" && this.state.compare === true &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}><span style={{color:\"red\"}}>:</span>&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \"( \" && this.state.compare === true &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}><span style={{color:\"red\"}}>(</span>&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \") \" && this.state.compare === true &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}><span style={{color:\"red\"}}>)</span>&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \"¡ \" && this.state.compare === true &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}><span style={{color:\"red\"}}>¡</span>&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \"! \" && this.state.compare === true &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}><span style={{color:\"red\"}}>!</span>&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \"¿ \" && this.state.compare === true &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}><span style={{color:\"red\"}}>¿</span>&nbsp;</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \"? \" && this.state.compare === true &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}><span style={{color:\"red\"}}>?</span>&nbsp;</button>");
            System.out.println("}");
            System.out.println("");
            cont++;

            String cap = ss.substring(0, 1).toUpperCase() + ss.substring(1);

            System.out.println("{this.state.p"+cont+" === \""+ss+"\" &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}>"+ss+"</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \""+cap+"\" && this.state.compare === false &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}>"+cap+"</button>");
            System.out.println("}");
            System.out.println("{this.state.p"+cont+" === \""+cap+"\" && this.state.compare === true &&");
            System.out.println("\t<button id=\"txtBut\" onClick={this.p"+cont+".bind(this)}><span style={{color:\"red\"}}>"+ss.substring(0, 1).toUpperCase()+"</span>"+ss.substring(1)+"</button>");
            System.out.println("}");
            System.out.println("");
            cont++;
        }*/
    }
}
