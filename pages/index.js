import Sanjay_Nep from './sanjay_nepali'
import Service from './service'
import TopcompNep from './top_comp_nepali'

export default function Home() {
  return (<div className="body">
    <TopcompNep />
    <Service/>
     <Sanjay_Nep></Sanjay_Nep>
     
  </div>
  )
}
