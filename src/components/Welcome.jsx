import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
        <div className="container-fluid">
	        <div className="row">
		        <div className="col-md-12">
			        <div className="row">
				        <div className="col-md-6 text-start">
                        <h1 className='mt-5'>Comprá tu auto usado en el mejor lugar de Argentina.</h1>
                         <p className='mt-4'>Todos nuestros vehículos cuantan con certificación de revisión</p>
                         <Link to ={"/catalogo"}>
                        <button type="button" className="btn btn-dark mt-5">Comprá tu auto!</button>
                        </Link>                    
				        </div>
				        <div className="col-md-6 mt-5">
                            <img src="/auto.PNG" alt="" className='img-fluid' />
				        </div>
			        </div>
		        </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome