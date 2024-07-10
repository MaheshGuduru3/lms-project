import { render , screen } from '@testing-library/react'
import Header from '../component/header/Header'



describe('testing the header component',()=>{
      test('testing the names texts are render correct',()=>{
            render(<Header />)
           //except(screen.getByText(/lms portal/i)).toBeInTheDocument()
        })
})