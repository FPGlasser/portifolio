import React from 'react'

const Banner = () => {
  return (
    <section id='#' className='w-full px-4 pt-[60px]'>
      <div className="w-full h-full min-h-[400px]  flex flex-col md:flex-row">
        <div className="flex-1 min-h-[100%] flex flex-col justify-around">
          <div className="flex flex-col gap-8">
            <div>
              <p className='md:text-[48px]'>Olá! Sou Glasser</p>
              <p className=''>Sou FullStack Engineer & Desenvolvedor</p>
            </div>
            <div>
              <p>
                Sou a peça necessaria para o seu tabuleiro, pronto para novos desafios.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <a className='px-4 py-3 bg-ui-secondary text-ui-text-primary rounded-[4px] cursor-pointer'>Contacte-me</a>
            <a className='px-4 py-3 border-[1px] border-ui-secondary text-ui-text-primary rounded-[4px] cursor-pointer'>Download CV</a>
          </div>
        </div>

        <div className="flex-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus laudantium eum, dicta omnis, necessitatibus a quidem totam iusto officiis, sit illo voluptas rerum saepe. Magni reiciendis eum consequuntur aspernatur distinctio.
        </div>
      </div>

    </section>
  )
}

export default Banner