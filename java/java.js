//LUZ DANIELA POCOATA QUISPE

// la primera funcion para mostrar el resultado de cada ejercicio
function mostrarResultado(id, mensaje) {
    const contenedor = document.getElementById(id);
    if (contenedor) {
        contenedor.innerHTML = '<strong>Resultado:</strong> ' + mensaje;
    }
}

//              AREA DE ASTRONOMIA

//1) 1. IF - Clasificación de brillo estelar (magnitud)
function ejercicioAstronomiaIF() {
    let magnitud = prompt("1. ASTRONOMÍA (IF): Ingrese la magnitud aparente (ej: -1.4 para Sirio):");
    let clasificacion = "Datos no válidos";
    // Plus: Alerta si la magnitud es negativa (Estrella/Planeta muy brillante)
    let visibilidad = "Visible";
    if (magnitud < -1) {
        clasificacion = "Extremadamente Brillante";
        visibilidad = "Extremadamente fácil de ver (Día/Noche).";
    } else if (magnitud >= -1 && magnitud < 2) {
        clasificacion = "Muy Brillante";
        visibilidad = "Fácil de ver, incluso en cielos urbanos.";
    } else if (magnitud >= 2 && magnitud < 4) {
        clasificacion = "Brillante";
        visibilidad = "Visible en cielos moderadamente oscuros.";
    } else if (magnitud >= 4 && magnitud < 6) {
        clasificacion = "Débil";
        visibilidad = "Requiere cielos oscuros.";
    } else if (magnitud >= 6) {
        clasificacion = "No Visible (a simple vista)";
        visibilidad = "Solo visible con ayuda óptica (telescopio o binoculares).";
    } else {
        clasificacion = "Valor de magnitud fuera de rango.";
    }
    let resultado = "Magnitud Aparente: " + magnitud + "<br> Clasificación: <strong>" + clasificacion + "</strong>.<br> Plus: Visibilidad Estimada: " + visibilidad;
    mostrarResultado("resultadoAstronomiaIF", resultado);
}

//1) 2. FOR - Registrar distancias de planetas
function ejercicioAstronomiaFOR() {
    let numPlanetas = prompt("2. ASTRONOMÍA (FOR): Ingrese el número de planetas/cuerpos a registrar:");
    let sumaDistancias = 0;
    if (numPlanetas > 0) {
        // Plus: Identificar la distancia mínima registrada
        let minDistancia = 999999999999;
        for (let i = 1; i <= numPlanetas; i++) {
            let distInput = prompt("Ingrese la distancia (en millones de km) del cuerpo " + i + ":");
            let distancia = parseFloat(distInput);
            if (distancia > 0) {
                sumaDistancias = sumaDistancias + distancia;
                if (distancia < minDistancia) {
                    minDistancia = distancia;
                }
            }
        }
        let promedio = sumaDistancias / numPlanetas;
        let resultado = "Promedio de Distancias: " + promedio.toFixed(2) + " millones de km.<br> Plus: Distancia mínima registrada: <strong>" + minDistancia + "</strong> millones de km.";
        mostrarResultado("resultadoAstronomiaFOR", resultado);
    }
    else {
        mostrarResultado("resultadoAstronomiaFOR", "Número de cuerpos celestes no válido.");
    }
}

//1) 3. WHILE - Contar cráteres lunares grandes
function ejercicioAstronomiaWHILE() {
    let diametro = 1;
    let contadorGrandes = 0;
    let diametroTotal = 0;
    // Plus: Sumar el diámetro total de todos los cráteres registrados
    let mensaje = "Ingresando diámetros de cráteres (0 para finalizar): ";
    while (diametro !== 0) {
        let diametroInput = prompt("3. ASTRONOMÍA (WHILE) - " + mensaje);// la ia me recomendo usar input, perdon lice    :,(
        diametro = parseFloat(diametroInput);
        if (diametro > 0) {
            diametroTotal = diametroTotal + diametro;
            if (diametro > 50) {
                contadorGrandes = contadorGrandes + 1;
            }
        }
        mensaje = "El último diámetro fue " + diametro + " km. Cráteres > 50 km: " + contadorGrandes + ". Ingrese siguiente (0 para finalizar):";
    }
    let resultado = "Total de cráteres grandes (> 50 km): <strong>" + contadorGrandes + "</strong>.<br> Plus: Diámetro total sumado de todos los cráteres: " + diametroTotal.toFixed(2) + " km.";
    mostrarResultado("resultadoAstronomiaWHILE", resultado);
}

//1) 4. SWITCH - Identificar cuerpo celeste
function ejercicioAstronomiaSWITCH() {
    let codigo = parseInt(prompt("4. ASTRONOMÍA (SWITCH): Ingrese código de cuerpo celeste (1-5): ")); // El parseInt lo encontre del link que mando al grupo
    let cuerpoCeleste = "Código no válido";
    let composicion = "";

    switch (codigo) {
        case 1:
            cuerpoCeleste = "Estrella";
            composicion = "Plasma caliente que emite luz (fusión nuclear)."; // Plus: Composición/Naturaleza
            break;
        case 2:
            cuerpoCeleste = "Planeta";
            composicion = "Órbita alrededor de una estrella, masa suficiente para ser esférico.";
            break;
        case 3:
            cuerpoCeleste = "Cometa";
            composicion = "Hielo, polvo y rocas, forma una cola al acercarse al Sol.";
            break;
        case 4:
            cuerpoCeleste = "Asteroide";
            composicion = "Pequeño cuerpo rocoso, típicamente en cinturones entre planetas.";
            break;
        case 5:
            cuerpoCeleste = "Galaxia";
            composicion = "Colección masiva de estrellas, gas, polvo y materia oscura.";
            break;
        default:
            cuerpoCeleste = "CODIGO FUERA DE RANGO (1-5)";
            composicion = "Revise el codigo ingresado.";
    }
    let resultado = "codigo " + codigo + "<br> Cuerpo Celeste: <strong>" + cuerpoCeleste + "<strong>.<br> Plus: Caracteristica/Composicion: " + composicion;
    mostrarResultado("resultadoAstronomiaSWITCH", resultado);
}

//1) 5. DO WHILE Registro de niveles de luz (lux)
function ejercicioAstronomiaDOWHILE() {
    let continuar;
    let conteoNocheProfunda = 0;
    let totalMediciones = 0;
    let minLux = 999999;
    let mensaje = "";
    // Plus: Determinar el nivel de luz mínimo registrado
    do {
        let lux = parseInt(prompt("5. ASTRONOMÍA (DO WHILE): Ingrese nivel de luz (Lux):"));
        if (lux >= 0) {
            totalMediciones = totalMediciones + 1;
            if (lux < minLux) {
                minLux = lux;
            }

            if (lux < 5) {
                conteoNocheProfunda = conteoNocheProfunda + 1;
                mensaje = "¡ALERTA! Nivel de " + lux + " Lux: 'Noche Profunda'. ";
            }
            else if (lux < 50) {
                mensaje = "Nivel de " + lux + " Lux: Noche Oscura. ";
            }
            else {
                mensaje = "Nivel de " + lux + " Lux: Noche Iluminada o Día. ";
            }
        }
        else {
            mensaje = "Medición no válida. ";
        }
        let continuacion = prompt(mensaje + "Desea registrar otra medición? (escriba 'no' para finalizar):");
        continuar = continuacion;
    }
    while (continuar !== "no" && continuar !== "No" && continuar !== "fin");
    let resultado = "Total de mediciones registradas: " + totalMediciones + ".<br> Veces con 'noche profunda' (<5 Lux): " + conteoNocheProfunda + ".<br> Plus: Nivel de luz mínimo registrado: <strong>" + minLux + " Lux</strong>.";
    mostrarResultado("resultadoAstronomiaDOWHILE", resultado);
}

//               AREA DE MEDIO AMBIEMTE

//2) 1. IF - Clasificación de calidad del aire (AQI)
function ejercicioAmbienteIF() {
    let aqi = parseInt(prompt("1. AMBIENTE (IF): Ingrese el valor del Índice de Calidad del Aire (AQI):"));
    let clasificacion = "Datos no válidos";
    // Plus: Determinar si se requiere 'Protección para grupos sensibles' (AQI > 100)
    let alerta = "No se requieren precauciones especiales.";
    if (aqi >= 0 && aqi <= 50) {
        clasificacion = "Bueno";
    } else if (aqi > 50 && aqi <= 100) {
        clasificacion = "Moderado";
    } else if (aqi > 100 && aqi <= 150) {
        clasificacion = "Dañino para Grupos Sensibles";
        alerta = "Se recomienda protección para niños, ancianos y personas con enfermedades respiratorias.";
    } else if (aqi > 150 && aqi <= 200) {
        clasificacion = "Dañino";
        alerta = "Se recomienda que todos reduzcan el esfuerzo prolongado al aire libre.";
    } else if (aqi > 200 && aqi <= 300) {
        clasificacion = "Muy Dañino";
        alerta = "¡Alerta sanitaria! Todos deben evitar actividades al aire libre.";
    } else if (aqi > 300) {
        clasificacion = "Peligroso";
        alerta = "¡Emergencia! Posiblemente se requiera evacuación o refugio en interiores.";
    } else {
        clasificacion = "Valor de AQI fuera de rango positivo.";
    }
    let resultado = "AQI: " + aqi + "<br> Clasificación: <strong>" + clasificacion + "</strong>.<br> Plus: " + alerta;
    mostrarResultado("resultadoAmbienteIF", resultado);
}

//2) 2. FOR - Registrar niveles de ruido ambiental
function ejercicioAmbienteFOR() {
    let numMediciones = parseInt(prompt("2. AMBIENTE (FOR): Ingrese el número de mediciones de ruido (dB):"));
    let sumaDecibeles = 0;
    if (numMediciones > 0) {
        // Plus: Contar cuántas mediciones superan el límite de ruido diurno típico (ej: 65 dB)
        let conteoExceso = 0;
        let limiteRuido = 65;
        for (let i = 1; i <= numMediciones; i++) {
            let decibel = parseFloat(prompt("Ingrese el nivel de ruido (dB) de la Medición " + i + ":"));
            if (decibel > 0) {
                sumaDecibeles = sumaDecibeles + decibel;
                if (decibel > limiteRuido) {
                    conteoExceso = conteoExceso + 1;
                }
            }
        }
        let promedio = sumaDecibeles / numMediciones;
        let resultado = "Promedio de Nivel de Ruido: " + promedio + " dB.<br> Plus: " + conteoExceso + " mediciones superaron el límite de " + limiteRuido + " dB.";
        mostrarResultado("resultadoAmbienteFOR", resultado);
    } else {
        mostrarResultado("resultadoAmbienteFOR", "Número de mediciones no válido.");
    }
}

//2) 3. WHILE - Contar focos de calor (posibles incendios) 
function ejercicioAmbienteWHILE() {
    let temperatura = 1; 
    let contadorFocos = 0;
    let maxTemp = 0; 
    // Plus: Identificar la temperatura máxima registrada
    let mensaje = "Ingresando temperaturas (0 para finalizar): ";
    while (temperatura !== 0) {
        let tempInput = prompt("3. AMBIENTE (WHILE) - " + mensaje);  // me hice ayudar con la ia para el conteo
        temperatura = parseFloat(tempInput);
        if (temperatura > 0) {
            if (temperatura > 45) { 
                contadorFocos = contadorFocos + 1;
            }
            if (temperatura > maxTemp) {
                maxTemp = temperatura;
            }
        }
        mensaje = "La última temperatura fue " + temperatura + "°C. Focos > 45°C: " + contadorFocos + ". Ingrese siguiente (0 para finalizar):";
    }
    let resultado = "Total de focos de calor (> 45°C): <strong>" + contadorFocos + "</strong>.<br> Plus: Temperatura máxima registrada: " + maxTemp + "°C.";
    mostrarResultado("resultadoAmbienteWHILE", resultado);
}


//2) 4. SWITCH - Clasificación del tipo de residuo
function ejercicioAmbienteSWITCH() {
    let codigo = parseInt(prompt("4. AMBIENTE (SWITCH): Ingrese código de residuo (1-4): "));
    let tipoResiduo = "Código no válido";
    let contenedor = "";
    switch (codigo) {
        case 1:
            tipoResiduo = "Orgánico";
            contenedor = "Compostera o contenedor marrón."; // Plus: Sugerencia de contenedor
            break;
        case 2:
            tipoResiduo = "Plástico";
            contenedor = "Contenedor amarillo, limpio y seco.";
            break;
        case 3:
            tipoResiduo = "Papel/Cartón";
            contenedor = "Contenedor azul, sin residuos de comida o grasa.";
            break;
        case 4:
            tipoResiduo = "Vidrio";
            contenedor = "Contenedor verde, sin tapas o etiquetas (si es posible).";
            break;
        default:
            tipoResiduo = "CÓDIGO FUERA DE RANGO (1-4)";
            contenedor = "Revise el código ingresado.";
    }
    let resultado = "Código " + codigo + "<br> Tipo de Residuo: <strong>" + tipoResiduo + "</strong>.<br> Plus: Contenedor Sugerido: " + contenedor;
    mostrarResultado("resultadoAmbienteSWITCH", resultado);
}

//2) 5. DO WHILE - Monitoreo de niveles del río
function ejercicioAmbienteDOWHILE() {
    let continuar;
    let conteoAlerta = 0;
    let totalMediciones = 0;
    let mensaje = "";
    // Plus: Contar cuántas veces se superó el umbral de 3m
    do {
        let nivel = parseFloat(prompt("5. AMBIENTE (DO WHILE): Ingrese nivel del río (metros):"));
        if (nivel > 0) {
            totalMediciones = totalMediciones + 1;
            if (nivel > 3) {
                conteoAlerta = conteoAlerta + 1;
                mensaje = "¡ALERTA MÁXIMA! Nivel: " + nivel + " m (Supera 3m). ";
            } else if (nivel > 2) {
                mensaje = "Nivel de Pre-Alerta. Nivel: " + nivel + " m. ";
            } else {
                mensaje = "Nivel Normal. Nivel: " + nivel + " m. ";
            }
        } else {
            mensaje = "Medición no válida. ";
        }
        let continuar1 = prompt(mensaje + "Desea registrar otra medición? (escriba 'no' para finalizar):");
        continuar = continuar1;

    } while (continuar !== "no" && continuar !== "NO");

    let resultado = "Total de mediciones registradas: " + totalMediciones + ".<br> Plus: Veces que se superó el umbral de 3m: <strong>" + conteoAlerta + "</strong>.";
    mostrarResultado("resultadoAmbienteDOWHILE", resultado);
}

//               AREA DE SALUD

//3) 1. IF - Clasificación de presión arterial
function ejercicioSaludIF() {
    let sistolica = parseInt(prompt("1. SALUD (IF): Ingrese la presión sistólica (ej: 120):"));
    let diastolica = parseInt(prompt("1. SALUD (IF): Ingrese la presión diastólica (ej: 80):"));
    let clasificacion = "Datos no válidos o incompletos";
    if (sistolica > 0 && diastolica > 0) {
        // Plus: Se añade los valores dados de la presion (120/80)
        if (sistolica < 90 || diastolica < 60) {
            clasificacion = "Hipotensión (Presión muy baja)";
        } else if (sistolica < 120 && diastolica < 80) {
            clasificacion = "Normal";
        } else if (sistolica >= 120 && sistolica < 130 && diastolica < 80) {
            clasificacion = "Elevada";
        } else if ((sistolica >= 130 && sistolica < 140) || (diastolica >= 80 && diastolica < 90)) {
            clasificacion = "HTA Grado 1";
        } else if (sistolica >= 140 || diastolica >= 90) {
            clasificacion = "HTA Grado 2";
        } else {
            clasificacion = "Clasificación No Definida (Revise los valores)";
        }
    }
    mostrarResultado("resultadoSaludIF", "Clasificación: <strong>" + clasificacion + "</strong>.<br> Presión: " + sistolica + "/" + diastolica);
}

//3) 2. FOR - Registrar temperatura de varios pacientes
function ejercicioSaludFOR() {
    let numPacientes = parseInt(prompt("2. SALUD (FOR): Ingrese el número de pacientes:"));
    let sumaTemperaturas = 0;
    if (numPacientes > 0) {
        // Plus: Contar cuántos pacientes tienen *exactamente* 37.0°C (temperatura basal)
        let pacientesBasal = 0;
        for (let i = 1; i <= numPacientes; i++) {
            let temperatura = parseFloat(prompt("Ingrese la temperatura del Paciente " + i + " (°C):"));
            if (temperatura > 0) {
                sumaTemperaturas = sumaTemperaturas + temperatura;
                if (temperatura == 37) {
                    pacientesBasal = pacientesBasal + 1;
                }
            }
        }
        let promedio = sumaTemperaturas / numPacientes;
        let resultado = "Promedio de Temperatura: " + promedio + "°C.<br> Plus: " + pacientesBasal + " paciente(s) con temperatura basal (37.0°C).";
        mostrarResultado("resultadoSaludFOR", resultado);
    } else {
        mostrarResultado("resultadoSaludFOR", "Número de pacientes no válido.");
    }
}

//3) 3. WHILE - Contar pacientes con fiebre
function ejercicioSaludWHILE() {
    let temperatura = 1;
    let contadorFiebre = 0;
    let numMediciones = 0;
    // Plus: Contar el número total de mediciones ingresadas
    let mensaje = "Ingresando temperaturas (0 para finalizar): ";
    while (temperatura !== 0) {
        let tempInput = parseFloat(prompt("3. SALUD (WHILE) - " + mensaje));
        temperatura = parseFloat(tempInput);
        if (temperatura > 0) { 
            numMediciones = numMediciones + 1; 

            if (temperatura >= 38) {
                contadorFiebre = contadorFiebre + 1;
            }
        }
        mensaje = "La última temperatura fue " + temperatura + "°C. Total con fiebre: " + contadorFiebre + ". Ingrese siguiente (0 para finalizar):";
    }
    let resultado = "Total de pacientes con fiebre (>= 38°C): <strong>" + contadorFiebre + "</strong>.<br> Plus: Total de mediciones ingresadas: " + numMediciones + ".";
    mostrarResultado("resultadoSaludWHILE", resultado);
}

//3) 4. SWITCH - Clasificación de TRIAGE
function ejercicioSaludSWITCH() {
    let codigo = parseInt(prompt("4. SALUD (SWITCH): Ingrese código TRIAGE (1-4): "));
    let categoria = "Código no válido";
    let descripcion = "";
    // Plus: agregar una breve descripcion
    switch (codigo) {
        case 1:
            categoria = "ROJO";
            descripcion = "Emergencia vital, atención inmediata.";
            break;
        case 2:
            categoria = "AMARILLO";
            descripcion = "Urgencia, atención en breve tiempo.";
            break;
        case 3:
            categoria = "VERDE";
            descripcion = "Urgencia menor, atención diferida.";
            break;
        case 4:
            categoria = "AZUL";
            descripcion = "No urgencia, puede ser derivado a consulta externa.";
            break;
        default:
            categoria = "CÓDIGO FUERA DE RANGO (1-4)";
            descripcion = "Por favor, ingrese un número entre 1 y 4.";
    }

    let resultado = "Código: " + codigo + "<br> Categoría: <strong>" + categoria + "</strong>.<br> Plus: " + descripcion;
    mostrarResultado("resultadoSaludSWITCH", resultado);
}

//3) 5. DO WHILE - Repetir mediciones de saturación SpO2
function ejercicioSaludDOWHILE() {
    let continuar;
    let saturacionesBajas = 0;
    let totalMediciones = 0;
    let mensaje = "";
    // Plus: Contar cuántas saturaciones están por debajo de 90% (hipoxemia)
    do {
        let spo2 = parseFloat(prompt("5. SALUD (DO WHILE): Ingrese saturación de oxígeno SpO2 (%):"));
        if (spo2 > 0 && spo2 <= 100) {
            totalMediciones = totalMediciones + 1;
            if (spo2 < 90) { 
                saturacionesBajas = saturacionesBajas + 1;
                mensaje = "¡ALERTA! SpO2 es bajo (<90%). ";
            } else if (spo2 >= 95) {
                mensaje = "SpO2 Normal. ";
            } else {
                mensaje = "SpO2 Marginal. ";
            }
        } else {
            mensaje = "Medición no válida. ";
        }
        let continuar1 = prompt(mensaje + "Desea registrar otra medición? (escriba 'no' para finalizar):");
        continuar = continuar1;
    } while (continuar !== "no" && continuar !== "NO" && continuar !== "no.");
    let resultado = "Total de mediciones registradas: " + totalMediciones + ".<br> Plus: Mediciones bajas (<90%): <strong>" + saturacionesBajas + "</strong>.";
    mostrarResultado("resultadoSaludDOWHILE", resultado);
}

