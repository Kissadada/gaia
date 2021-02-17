(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{688:function(e,a,o){"use strict";o.r(a);var s=o(0),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"instrucciones-de-actualizacion-del-cosmos-hub-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#instrucciones-de-actualizacion-del-cosmos-hub-3"}},[e._v("#")]),e._v(" Instrucciones de actualización del Cosmos Hub 3")]),e._v(" "),o("p",[e._v("El siguiente documento describe los pasos necesarios que deben seguir los operadores de un full node para actualizar de "),o("code",[e._v("cosmoshub-3")]),e._v(" a "),o("code",[e._v("cosmoshub-4")]),e._v(". El equipo de Tendermint publicará un archivo génesis oficial actualizado, pero se recomienda que los validadores ejecuten las siguientes instrucciones para verificar el archivo génesis resultante.")]),e._v(" "),o("p",[e._v("Existe un amplio consenso social en torno a la "),o("code",[e._v("propuesta de actualización del Cosmos Hub 4")]),e._v(" sobre el "),o("code",[e._v("cosmoshub-3")]),e._v(". Siguiendo las propuestas #"),o("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/27",target:"_blank",rel:"noopener noreferrer"}},[e._v("27"),o("OutboundLink")],1),e._v(", #"),o("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/35",target:"_blank",rel:"noopener noreferrer"}},[e._v("35"),o("OutboundLink")],1),e._v(" y #"),o("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/36",target:"_blank",rel:"noopener noreferrer"}},[e._v("36"),o("OutboundLink")],1),e._v(". Se indica que el procedimiento de actualización debe realizarse el "),o("code",[e._v("18 de febrero de 2021 a las 06:00 UTC")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#migraciones"}},[e._v("Migraciones")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#preliminares"}},[e._v("Preliminares")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#principales-actualizaciones"}},[e._v("Principales actualizaciones")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#riesgos"}},[e._v("Riesgos")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#recuperaci%C3%B3n"}},[e._v("Recuperación")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#procedimiento-de-actualizaci%C3%B3n"}},[e._v("Procedimiento de actualización")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#notas-para-los-proveedores-de-servicios"}},[e._v("Notas para los proveedores de servicios")])])]),e._v(" "),o("h1",{attrs:{id:"migraciones"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#migraciones"}},[e._v("#")]),e._v(" Migraciones")]),e._v(" "),o("p",[e._v("Estos capítulos contienen todas las guías de migración para actualizar tu aplicación y módulos a Cosmos v0.40 Stargate.")]),e._v(" "),o("p",[e._v("Si tienes un explorador de bloques, un monedero, un exchange, un validador o cualquier otro servicio (por ejemplo, un proveedor de custodia) que dependa del Cosmos Hub o del ecosistema Cosmos, deberás prestar atención, porque esta actualización implicará cambios sustanciales.")]),e._v(" "),o("ol",[o("li",[o("RouterLink",{attrs:{to:"ttps://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/app_and_modules.html"}},[e._v("Migración de aplicaciones y módulos")])],1),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/chain-upgrade-guide-040.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guía de actualización de la cadena a v0.41"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/rest.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Migración de endpoints REST"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/main/docs/migration/breaking_changes.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Recopilación de modificaciones de ruptura de los registros de cambios"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://figment.io/resources/cosmos-stargate-upgrade-overview/#ibc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Comunicación entre cadenas de bloques (IBC) - transacciones entre cadenas"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://figment.network/resources/cosmos-stargate-upgrade-overview/#proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("Migración de Protobuf - rendimiento de la cadena de bloques y aceleración del desarrollo"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://figment.network/resources/cosmos-stargate-upgrade-overview/#sync",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sincronización de estados - minutos para sincronizar nuevos nodos"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://figment.network/resources/cosmos-stargate-upgrade-overview/#light",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clientes ligeros con todas las funciones"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://figment.network/resources/cosmos-stargate-upgrade-overview/#upgrade",target:"_blank",rel:"noopener noreferrer"}},[e._v("Módulo de actualización de la cadena - automatización de la actualización"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Si quieres probar el procedimiento antes de que se produzca la actualización el 18 de febrero, consulta este "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/issues/569#issuecomment-767910963",target:"_blank",rel:"noopener noreferrer"}},[e._v("post"),o("OutboundLink")],1),e._v(" en relación a ello.")]),e._v(" "),o("h2",{attrs:{id:"preliminares"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#preliminares"}},[e._v("#")]),e._v(" Preliminares")]),e._v(" "),o("p",[e._v("Se han producido muchos cambios en el SDK de Cosmos y en la aplicación Gaia desde la última gran actualización ("),o("code",[e._v("cosmoshub-3")]),e._v("). Estos cambios consisten principalmente en muchas nuevas características, cambios de protocolo y cambios estructurales de la aplicación que favorecen la ergonomía del desarrollador y el desarrollo de la aplicación.")]),e._v(" "),o("p",[e._v("En primer lugar, se habilitará "),o("a",{attrs:{href:"https://docs.cosmos.network/master/ibc/overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC"),o("OutboundLink")],1),e._v(" siguiendo los "),o("a",{attrs:{href:"https://github.com/cosmos/ics#ibc-quick-references",target:"_blank",rel:"noopener noreferrer"}},[e._v("estándares de Interchain"),o("OutboundLink")],1),e._v(". Esta actualización viene con varias mejoras en la eficiencia, la sincronización de nodos y las siguientes actualizaciones de la cadena de bloques. Más detalles en el "),o("a",{attrs:{href:"https://stargate.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("sitio web de Stargate"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("La aplicación "),o("a",{attrs:{href:"https://github.com/cosmos/gaia",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia"),o("OutboundLink")],1),e._v(" v4.0.0 es lo que los operadores de nodos actualizarán y ejecutarán en esta próxima gran actualización")]),e._v(". Tras la versión v0.41.0 del SDK de Cosmos y la v0.34.3 de Tendermint.")]),e._v(" "),o("h2",{attrs:{id:"principales-actualizaciones"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#principales-actualizaciones"}},[e._v("#")]),e._v(" Principales actualizaciones")]),e._v(" "),o("p",[e._v("Hay muchas características y cambios notables en la próxima versión del SDK. Muchos de ellos se discuten a de forma general "),o("a",{attrs:{href:"https://github.com/cosmos/stargate",target:"_blank",rel:"noopener noreferrer"}},[e._v("aquí"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Algunos de los principales cambios que hay que tener en cuenta a la hora de actualizar como desarrollador o cliente son los siguientes:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Protocol Buffers")]),e._v(": Inicialmente el SDK de Cosmos utilizaba "),o("em",[e._v("codecs")]),e._v(" de Amino para casi toda la codificación y decodificación. En esta versión se ha integrado una importante actualización de los Protocol Buffers. Se espera que con los Protocol Buffers las aplicaciones ganen en velocidad, legibilidad, conveniencia e interoperabilidad con muchos lenguajes de programación. Para más información consulta "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/app_and_modules.md#protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("aquí"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("CLI")]),e._v(": El CLI y el commando de full node para la cadena de bloques estaban separados en las versiones anteriores del SDK de Cosmos. Esto dio lugar a dos binarios, "),o("code",[e._v("gaiad")]),e._v(" y "),o("code",[e._v("gaiacli")]),e._v(", que estaban separados y podían utilizarse para diferentes interacciones con la cadena de bloques. Ambos se han fusionado en un solo comando "),o("code",[e._v("gaiad")]),e._v(" que ahora soporta los comandos que antes soportaba el "),o("code",[e._v("gaiacli")]),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("Configuración del nodo")]),e._v(": Anteriormente los datos de la cadena de bloques y la configuración de los nodos se almacenaban en "),o("code",[e._v("~/.gaiad/")]),e._v(", ahora residirán en "),o("code",[e._v("~/.gaia/")]),e._v(", si utilizas scripts que hacen uso de la configuración o de los datos de la cadena de bloques, asegúrate de actualizar la ruta.")])]),e._v(" "),o("h2",{attrs:{id:"riesgos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#riesgos"}},[e._v("#")]),e._v(" Riesgos")]),e._v(" "),o("p",[e._v("Como validador, realizar el procedimiento de actualización en sus nodos de consenso conlleva un mayor riesgo de de doble firma y de ser penalizado. La parte más importante de este procedimiento es verificar su versión del software y el hash del archivo génesis antes de iniciar el validador y firmar.")]),e._v(" "),o("p",[e._v("Lo más arriesgado que puede hacer un validador es descubrir que ha cometido un error y volver a repetir el procedimiento de actualización durante el arranque de la red. Si descubre un error en el proceso, lo mejor es esperar a que la red se inicie antes de corregirlo. Si la red se detiene y ha comenzado con un archivo de génesis diferente al esperado, busque el asesoramiento de un desarrollador de Tendermint antes de reiniciar su validador.")]),e._v(" "),o("h2",{attrs:{id:"recuperacion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#recuperacion"}},[e._v("#")]),e._v(" Recuperación")]),e._v(" "),o("p",[e._v("Antes de exportar el estado de "),o("code",[e._v("cosmoshub-3")]),e._v(", se recomienda a los validadores que tomen una instantánea completa de los datos a la altura de la exportación antes de proceder. La toma de snapshots depende en gran medida de la infraestructura, pero en general se puede hacer una copia de seguridad del directorio "),o("code",[e._v(".gaiad")]),e._v(".")]),e._v(" "),o("p",[e._v("Es muy importante hacer una copia de seguridad del archivo "),o("code",[e._v(".gaiad/data/priv_validator_state.json")]),e._v(" después de detener el proceso de gaiad. Este archivo se actualiza en cada bloque cuando tu validador participa en las rondas de consenso. Es un archivo crítico necesario para evitar la doble firma, en caso de que la actualización falle y sea necesario reiniciar la cadena anterior.")]),e._v(" "),o("p",[e._v("En el caso de que la actualización no tenga éxito, los validadores y operadores deben volver a actualizar a\ngaia v2.0.15 con v0.37.15 del "),o("em",[e._v("Cosmos SDK")]),e._v(" y restaurar a su último snapshot antes de reiniciar sus nodos.")]),e._v(" "),o("h2",{attrs:{id:"procedimiento-de-actualizacion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#procedimiento-de-actualizacion"}},[e._v("#")]),e._v(" Procedimiento de actualización")]),e._v(" "),o("p",[o("strong",[e._v("Nota")]),e._v(": Se asume que actualmente está operando un nodo completo ejecutando gaia v2.0.15 con v0.37.15 del "),o("em",[e._v("Cosmos SDK")]),e._v(".")]),e._v(" "),o("p",[e._v("El hash de la versión/commit de Gaia v2.0.15: "),o("code",[e._v("89cf7e6fc166eaabf47ad2755c443d455feda02e")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Compruebe que está ejecutando la versión correcta (v2.0.15) de "),o("em",[e._v("gaiad")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnYWlhZCB2ZXJzaW9uIC0tbG9uZwpuYW1lOiBnYWlhCnNlcnZlcl9uYW1lOiBnYWlhZApjbGllbnRfbmFtZTogZ2FpYWNsaQp2ZXJzaW9uOiAyLjAuMTUKY29tbWl0OiA4OWNmN2U2ZmMxNjZlYWFiZjQ3YWQyNzU1YzQ0M2Q0NTVmZWRhMDJlCmJ1aWxkX3RhZ3M6IG5ldGdvLGxlZGdlcgpnbzogZ28gdmVyc2lvbiBnbzEuMTUgZGFyd2luL2FtZDY0Cg=="}})],1),e._v(" "),o("li",[o("p",[e._v("Asegúrese de que su cadena se detiene en la fecha y hora correctas:\n18 de febrero de 2021 a las 06:00 UTC es en segundos UNIX: "),o("code",[e._v("1613628000")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGVybCAtaSAtcGUgJ3MvXmhhbHQtdGltZSA9LiovaGFsdC10aW1lID0gMTYxMzYyODAwMC8nIH4vLmdhaWFkL2NvbmZpZy9hcHAudG9tbAo="}})],1),e._v(" "),o("li",[o("p",[e._v("Después de que la cadena se haya detenido, haz una copia de seguridad de tu directorio "),o("code",[e._v(".gaiad")]),e._v(".")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bXYgfi8uZ2FpYWQgLi9nYWlhZF9iYWNrdXAK"}}),e._v(" "),o("p",[o("strong",[e._v("NOTA")]),e._v(": Se recomienda a los validadores y operadores que tomen una instantánea completa de los datos a la altura de la exportación antes de proceder en caso de que la actualización no vaya según lo previsto o si no se pone en línea suficiente poder de voto en un tiempo determinado y acordado. En tal caso, la cadena volverá a funcionar con "),o("code",[e._v("cosmoshub-3")]),e._v(". Consulte "),o("a",{attrs:{href:"#recuperaci%C3%B3n"}},[e._v("Recuperación")]),e._v(" para saber cómo proceder.")])],1),e._v(" "),o("li",[o("p",[e._v("Exportar el estado existente de "),o("code",[e._v("cosmoshub-3")]),e._v(":")]),e._v(" "),o("p",[e._v("Antes de exportar el estado a través del siguiente comando, el binario "),o("code",[e._v("gaiad")]),e._v(" debe estar detenido. Como validador, puedes ver la última altura del bloque creado en el "),o("code",[e._v("~/.gaiad/config/data/priv_validator_state.json")]),e._v(" -o que ahora reside en "),o("code",[e._v("gaiad_backup")]),e._v(" cuando hiciste una copia de seguridad como en el último paso- y obtenerla con")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2F0IH4vLmdhaWFkL2NvbmZpZy9kYXRhL3ByaXZfdmFsaWRhdG9yX3N0YXRlLmpzb24gfCBqcSAnLmhlaWdodCcK"}}),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnYWlhZCBleHBvcnQgLS1mb3ItemVyby1oZWlnaHQgLS1oZWlnaHQ9Jmx0O2hlaWdodCZndDsgJmd0OyBjb3Ntb3NodWJfM19nZW5lc2lzX2V4cG9ydC5qc29uCg=="}}),e._v(" "),o("p",[o("em",[e._v("esto puede llevar un tiempo, puede esperar una hora para este paso")])])],1),e._v(" "),o("li",[o("p",[e._v("Verifique el SHA256 del archivo génesis exportado (ordenado):")]),e._v(" "),o("p",[e._v("Compara este valor con otros validadores / operadores de nodos completos de la red.\nEn el futuro será importante que todas las partes puedan crear la misma exportación de archivos génesis.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBqcSAtUyAtYyAtTSAnJyBjb3Ntb3NodWJfM19nZW5lc2lzX2V4cG9ydC5qc29uIHwgc2hhc3VtIC1hIDI1NgpbU0hBMjU2X1ZBTFVFXSAgY29zbW9zaHViXzNfZ2VuZXNpc19leHBvcnQuanNvbgo="}})],1),e._v(" "),o("li",[o("p",[e._v("En este punto, ya tiene un estado de génesis exportado válido. Todos los pasos posteriores requieren ahora v4.0.0 de "),o("a",{attrs:{href:"https://github.com/cosmos/gaia",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia"),o("OutboundLink")],1),e._v(".\nCompruebe el hash de su génesis con otros compañeros (otros validadores) en las salas de chat.")]),e._v(" "),o("p",[o("strong",[e._v("NOTA")]),e._v(": Go "),o("a",{attrs:{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.15+"),o("OutboundLink")],1),e._v(" es necesario!")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9nYWlhLmdpdCAmYW1wOyZhbXA7IGNkIGdhaWEgJmFtcDsmYW1wOyBnaXQgY2hlY2tvdXQgdjQuMC4wOyBtYWtlIGluc3RhbGwK"}})],1),e._v(" "),o("li",[o("p",[e._v("Verifique que está ejecutando la versión correcta (v4.0.0) de "),o("em",[e._v("Gaia")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnYWlhZCB2ZXJzaW9uIC0tbG9uZwpuYW1lOiBnYWlhCnNlcnZlcl9uYW1lOiBnYWlhZAp2ZXJzaW9uOiA0LjAuMApjb21taXQ6IDJiYjA0MjY2MjY2NTg2NDY4MjcxYzRhYjMyMjM2N2FjYmY0MTE4OGYKYnVpbGRfdGFnczogbmV0Z28sbGVkZ2VyCmdvOiBnbyB2ZXJzaW9uIGdvMS4xNSBkYXJ3aW4vYW1kNjQKYnVpbGRfZGVwczoKLi4uCg=="}}),e._v(" "),o("p",[e._v("El hash y versión/commit de Gaia v4.0.0: "),o("code",[e._v("2bb04266266586468271c4ab322367acbf41188f")])])],1),e._v(" "),o("li",[o("p",[e._v("Migrar el estado exportado de la versión actual v2.0.15 a la nueva versión v4.0.0:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnYWlhZCBtaWdyYXRlIGNvc21vc2h1Yl8zX2dlbmVzaXNfZXhwb3J0Lmpzb24gLS1jaGFpbi1pZD1jb3Ntb3NodWItNCAtLWluaXRpYWwtaGVpZ2h0IFtsYXN0X2Nvc21vc2h1Yi0zX2Jsb2NrKzFdICZndDsgZ2VuZXNpcy5qc29uCg=="}}),e._v(" "),o("p",[e._v("Esto migrará nuestro estado exportado del archivo "),o("code",[e._v("genesis.json")]),e._v(" requerido para iniciar el cosmoshub-4.")])],1),e._v(" "),o("li",[o("p",[e._v("Verifique el SHA256 del JSON final del génesis:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBqcSAtUyAtYyAtTSAnJyBnZW5lc2lzLmpzb24gfCBzaGFzdW0gLWEgMjU2CltTSEEyNTZfVkFMVUVdICBnZW5lc2lzLmpzb24K"}}),e._v(" "),o("p",[e._v("Compare este valor con otros validadores / operadores de nodos de la red.\nEs importante que cada parte pueda reproducir el mismo archivo genesis.json de los pasos correspondientes.")])],1),e._v(" "),o("li",[o("p",[e._v("Reinicio del estado:")]),e._v(" "),o("p",[o("strong",[e._v("NOTA")]),e._v(": Asegúrese de tener una copia de seguridad completa de su nodo antes de proceder con este paso.\nConsulte "),o("a",{attrs:{href:"#recuperaci%C3%B3n"}},[e._v("Recuperación")]),e._v(" para obtener detalles sobre cómo proceder.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnYWlhZCB1bnNhZmUtcmVzZXQtYWxsCg=="}})],1),e._v(" "),o("li",[o("p",[e._v("Mueve el nuevo "),o("code",[e._v("genesis.json")]),e._v(" a tu directorio "),o("code",[e._v(".gaia/config/")]),e._v(".")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3AgZ2VuZXNpcy5qc29uIH4vLmdhaWEvY29uZmlnLwo="}})],1),e._v(" "),o("li",[o("p",[e._v("Inicie su blockchain")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),e._v(" "),o("p",[e._v("Las auditorías automatizadas del estado de génesis pueden durar entre 30 y 120 minutos utilizando el módulo de crisis. Esto se puede desactivar mediante\n"),o("code",[e._v("gaiad start --x-crisis-skip-assert-invariants")]),e._v(".")])],1)]),e._v(" "),o("h2",{attrs:{id:"notas-para-los-proveedores-de-servicios"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#notas-para-los-proveedores-de-servicios"}},[e._v("#")]),e._v(" Notas para los proveedores de servicios")]),e._v(" "),o("h1",{attrs:{id:"servidor-rest"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#servidor-rest"}},[e._v("#")]),e._v(" Servidor REST")]),e._v(" "),o("p",[e._v("En caso de que hayas estado ejecutando el servidor REST con el comando "),o("code",[e._v("gaiacli rest-server")]),e._v(" previamente, ejecutar este comando ya no será necesario. El servidor API está ahora en proceso con el demonio y puede ser activado/desactivado por la configuración de la API en su "),o("code",[e._v(".gaia/config/app.toml")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"W2FwaV0KIyBFbmFibGUgZGVmaW5lIHNpIGxhIEFQSSBkZWwgc2Vydmlkb3IgZGViZSBlc3RhciBoYWJpbGl0YWRhLgplbmFibGUgPSBmYWxzZQojIFN3YWdnZXIgZGVmaW5lIHNpIGxhIGRvY3VtZW50YWNpw7NuIHN3YWdnZXIgZGViZSByZWdpc3RyYXJzZSBhdXRvbcOhdGljYW1lbnRlLgpzd2FnZ2VyID0gZmFsc2UK"}}),e._v(" "),o("p",[e._v("El ajuste "),o("code",[e._v("swagger")]),e._v(" se refiere a la activación/desactivación de la API de documentos swagger, es decir, el punto final de la API /swagger/.")]),e._v(" "),o("h1",{attrs:{id:"configuracion-grpc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-grpc"}},[e._v("#")]),e._v(" Configuración gRPC")]),e._v(" "),o("p",[e._v("Configuración gRPC en tu "),o("code",[e._v(".gaia/config/app.toml")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"W2dycGNdCiMgRW5hYmxlIGRlZmluZSBzaSBlbCBzZXJ2aWRvciBnUlBDIGRlYmUgZXN0YXIgaGFiaWxpdGFkby4KZW5hYmxlID0gdHJ1ZQojIEFkZHJlc3MgZGVmaW5lIGxhIGRpcmVjY2nDs24gZGVsIHNlcnZpZG9yIGdSUEMgYSBsYSBxdWUgc2UgdmluY3VsYS4KYWRkcmVzcyA9ICZxdW90OzAuMC4wLjA6OTA5MCZxdW90Owo="}}),e._v(" "),o("h1",{attrs:{id:"state-sync"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#state-sync"}},[e._v("#")]),e._v(" State Sync")]),e._v(" "),o("p",[e._v("Configuración de State Sync en tu "),o("code",[e._v(".gaia/config/app.toml")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"IyBTdGF0ZSBzeW5jIG8gbGFzIGluc3RhbnTDoW5lYXMgZGUgc2luY3Jvbml6YWNpw7NuIGRlIGVzdGFkbyBwZXJtaXRlbiBxdWUgb3Ryb3Mgbm9kb3MgCiMgc2UgdW5hbiByw6FwaWRhbWVudGUgYSBsYSByZWQgc2luIHJlcHJvZHVjaXIgbG9zIGJsb3F1ZXMgaGlzdMOzcmljb3MsIGRlc2NhcmdhbmRvIHkgCiMgYXBsaWNhbmRvIGVuIHN1IGx1Z2FyIHVuYSBpbnN0YW50w6FuZWEgZGVsIGVzdGFkbyBkZSBsYSBhcGxpY2FjacOzbiBhIHVuYSBhbHR1cmEgZGV0ZXJtaW5hZGEuCltzdGF0ZS1zeW5jXQojIHNuYXBzaG90LWludGVydmFsIGVzcGVjaWZpY2EgZWwgaW50ZXJ2YWxvIGRlIGJsb3F1ZXMgZW4gZWwgcXVlIHNlIHRvbWFuIGluc3RhbnTDoW5lYXMgCiMgZGUgc2luY3Jvbml6YWNpw7NuIGRlIGVzdGFkbyBsb2NhbCAoMCBwYXJhIGRlc2hhYmlsaXRhcikuIERlYmUgc2VyIHVuIG3Dumx0aXBsbyBkZSAKIyBwcnVuaW5nLWtlZXAtZXZlcnkuCnNuYXBzaG90LWludGVydmFsID0gMAojIHNuYXBzaG90LWtlZXAtcmVjZW50IGVzcGVjaWZpY2EgZWwgbsO6bWVybyBkZSBpbnN0YW50w6FuZWFzIHJlY2llbnRlcyBhIGNvbnNlcnZhciB5IHNlcnZpciAKIyAoMCBwYXJhIGNvbnNlcnZhciB0b2RhcykuCnNuYXBzaG90LWtlZXAtcmVjZW50ID0gMgo="}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);