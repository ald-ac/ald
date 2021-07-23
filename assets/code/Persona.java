public class Persona {

	private String nombre;
	private String ocupacion;
	private String carrera;
	private String residencia;
	private int edad;
	private String lenguajePrincipal;
	private String[] estudiando;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getOcupacion() {
		return ocupacion;
	}

	public void setOcupacion(String ocupacion) {
		this.ocupacion = ocupacion;
	}

	public String getResidencia() {
		return residencia;
	}

	public void setResidencia(String residencia) {
		this.residencia = residencia;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public String getLenguajePrincipal() {
		return lenguajePrincipal;
	}

	public void setLenguajePrincipal(String lenguajePrincipal) {
		this.lenguajePrincipal = lenguajePrincipal;
	}

	public String[] getEstudiando() {
		return estudiando;
	}

	public void setEstudiando(String[] estudiando) {
		this.estudiando = estudiando;
	}

	public String getCarrera() {
		return carrera;
	}

	public void setCarrera(String carrera) {
		this.carrera = carrera;
	}

	@Override
	public String toString() {
		String presentacion = "Bienvenido a mi Portafolio de desarrollador web, mi nombre"
				+ " es: " + nombre + ", actualmente me encuentro viviendo en " + residencia
				+ ", tengo " + edad + " años de edad y soy " + ocupacion + " en " + carrera + "."
				+ " Aquí encontrarás algunos proyectos desarrollados por mi de forma independiente"
				+ " o en cursos que he tomado, así como información extra mia, soy un fiel creyente de " + lenguajePrincipal
				+ " por lo que en este momento estoy adentrandome en " + estudiando[0] + " y tambien en "
				+ estudiando[1]  + ".";
		return presentacion;
	}
}
