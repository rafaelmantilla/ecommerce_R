import React from 'react'

const Footer = () => {
  return (
       <footer className="mt-5">
      
        <div className="container-fluid">
	<div className="row">
		<div className="col-md-12 bg-dark">
			<div className="row">
				<div className="col-md-4 mt-2">
                <a>
                     <img alt="Logo Avak" src="/LogoBlanco.png" className='float-start img-fluid' width="150px" />
                </a>
				</div>
				<div className="col-md-4">
                    
				</div>
				<div className="col-md-4 mt-2">
                <ul>
                     <li className="list-item text-light">
                        Comprá tu auto
                     </li>
                     <li className="list-item text-light">
                         Financiamiento
                     </li>
                     <li className="list-item text-light">
                         Contacto
                     </li>
                </ul>

				</div>
			</div>
		</div>
	</div>
</div>
    </footer>
  )
}

export default Footer