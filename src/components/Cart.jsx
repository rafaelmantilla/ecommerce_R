import React from 'react'

const Cart = () => {
return (
    <div>
       <div className="row">
            <div className="col-md-12">
                 <form className="row g-3">
                         <div className="col-md-6">
                          <label for="inputEmail4" className="form-label">Nombre</label>
                          <input type="text" className="form-control" id="inputname"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="inputlastname"/>
                          </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-6">
                          <label for="inputAddress2" className="form-label">Domicilio</label>
                          <input type="text" className="form-control" id="domicilio"/>
                        </div>
                          <div className="col-md-4">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" for="gridCheck">
                              Quiero que me envien el auto a mi domicilio.
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
             </form>
          </div>
    </div>
    </div>
 )
 
}

export default Cart