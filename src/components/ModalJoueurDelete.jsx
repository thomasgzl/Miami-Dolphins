import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalJoueurDelete.css';

class ModalJoueurDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalDelete: false
        };

        this.toggleDelete = this.toggleDelete.bind(this);
    }

    toggleDelete() {
        this.setState({
            modalDelete: !this.state.modalDelete
        });
    }

    closeModal() {
        this.setState({
            modalDelete: false,

        })
    }
  
    //fonction pour supprimer un joueur

    getDeletePlayer(id) {
        const url = "http://92.175.11.66:3000/reaction/api/joueurs";
        return fetch(url + '/' + id, {
            method: 'DELETE'
        })
            .then(res => {
                if (res.error) {
                    alert(res.error);
                }
                else {
                    alert(`Joueur supprimé!`)
                    window.location.reload();
                }
            })

    }

    render() {
        return (
            <div>
                <Button className={this.props.className} color="danger" onClick={() => this.toggleDelete(this.props.joueurId)}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modalDelete} toggle={this.toggleDelete} >
                    <ModalHeader toggle={this.toggleDelete}>Suppression de Joueur</ModalHeader>
                    <ModalBody>
                        Voulez vous supprimer ce joueur ?
                     </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.getDeletePlayer(this.props.joueurId)}>Oui</Button>{' '}
                        <Button color="secondary" onClick={this.toggleDelete}>Non</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalJoueurDelete;
