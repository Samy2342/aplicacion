import { Button, Modal } from "react-bootstrap";
import { Senia } from "./useSenias";

interface Props {
    mostrar: boolean,
    onCerrarVentana: () => void,
    registro: Senia,
    dataChanged: (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void,
    videoChanged: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onGuardar: () => void
}

const AgregarSenias = ({mostrar, onCerrarVentana, registro, dataChanged, videoChanged, onGuardar} : Props) => {
         
      return (
        <Modal show={mostrar} onHide={onCerrarVentana}>
            <Modal.Header closeButton>
                <Modal.Title>nueva Seña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="col-12">
                <div className="mb-3">
                    <label>Título</label>
                    <input
                    type="text"
                    id="Titulo"
                    className="from-control"
                    value={registro.Titulo}
                    onChange={dataChanged}
                        />
                </div>
            </div>
            <div className="col-12">
                <div className="mb-3">
                    <label>Descripcion</label>
                    <textarea
                    id="Descripcion"
                    className="from-control"
                    value={registro.Descripcion}
                    onChange={dataChanged}
                    ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label>Url</label>
                            <input
                            type="text"
                            id="Url"
                            className="from-control"
                            value={registro.Url}
                            onChange={dataChanged}
                                />
                                </div>
                            </div>
                            <div className="col-12">
                                <label><input type="checkbox" id="EsVideo" checked={registro.EsVideo} onChange={videoChanged} /> EsVideo</label>
                            </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={onCerrarVentana}>
                                 Cerrar
                            </Button>
                            <Button variant="primary" onClick={onGuardar}>
                                Guardar
                            </Button>
                            </Modal.Footer>
                            </Modal>
      )
}
export default AgregarSenias