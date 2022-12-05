import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}
const ShoppingPages = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}
      >
      { <ProductCard product={ product }> 
        <ProductCard.Image  className='custom-image' />
        <ProductCard.Title className='text-bold' />
        <ProductCard.Buttons className='custom-button' />
      </ProductCard> }
      
      <ProductCard product={ product } className='bg-dark text-white'> 
        <ProductImage className='custom-image' />
        <ProductTitle className='text-bold' />
        <ProductButtons className='custom-button' />
      </ProductCard>
      
      <ProductCard 
        product={ product } 
        style={{ 
          backgroundColor: '#70D1F8'
          }}
      > 
        <ProductImage style={{
          boxShadow: '10px 10px 10px rgba(0,0,0,0.4)'
        }}/>
        <ProductTitle style={{
          fontWeight: 'bold'
        }} />
        <ProductButtons style={{
          display: 'flex',
          justifyContent: 'end',
        }} />
      </ProductCard>
      
      
      </div>
    </div>
  )
}

export default ShoppingPages
