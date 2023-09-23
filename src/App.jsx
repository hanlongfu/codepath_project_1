import './App.css';
import Foodtruck from './components/Foodtruck';


const App = () => {

  return (
    <div className="App">
      <img src="/assets/awning.png" alt="" />
      <h1>Food Truck Favorites</h1>
      <div className="foodTruck_components">
        <Foodtruck src="/assets/Birria-Landia.jpeg" name="Birria-Landia" style="Mexican" link="https://thebirrialandia.com/menu/"/>
        <Foodtruck src="/assets/Mysttik-Masala.jpeg" name="Mysttik Masala" style="Indian" link="https://indianfoodny.com/"/>
        <Foodtruck src="/assets/The-Halal-Guys.jpeg" name="The Halal Guys" style="Middle Eastern" link="https://thehalalguys.com/menu/"/>
        <Foodtruck src="/assets/NY-Dosas.jpeg" name="NY Dosas" style="Vegetarian" link="https://nydosas.com/menu/"/>
        <Foodtruck src="/assets/Jerk-Pan.jpg" name="Jerk Pan" style="Jamaican" link="https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/"/>
        <Foodtruck src="/assets/Tong.jpeg" name="Tong" style="Bangladeshi" link="https://www.facebook.com/Bangladeshistreetfoods/"/>
        <Foodtruck src="/assets/King-Souvlaki-of-Astoria.jpeg" name="King Souvlaki of Astoria" style="Greek" link="https://kingsouvlakinyc.com/"/>
        <Foodtruck src="/assets/Ling's-Sweet-Mini-Cakes.jpeg" name="Ling's Sweet Mini Cakes" style="Chinese" link="https://canalstreet.market/"/>
        <Foodtruck src="/assets/Uncle-Gussy's.jpeg" name="Uncle Gussy's" style="Greek" link="https://unclegussys.com/menus/"/>
        <Foodtruck src="/assets/Patacon-Pisao.jpeg" name="Patacon Pisao" style="Venezuelan" link="https://www.pataconpisaonyc.com/menus/"/>
        <Foodtruck src="/assets/Mom's-Mono.jpeg" name="Mom's Mono" style="Tibetan" link="https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/"/>
        <Foodtruck src="/assets/Makina-Cafe.jpeg" name="Makina Cafe" style="Ethiopian" link="https://makinacafenyc.com/"/>
      </div>
  




    </div>
  )
}

export default App
