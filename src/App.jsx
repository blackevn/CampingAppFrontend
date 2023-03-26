
import { Route, Routes } from "react-router-dom";
import { Home,
         About, 
         SharedLayout, 
         Register, 
         Login, 
         Error, 
         Users, 
         User, 
         Contact, 
         Store, 
         PostDetail, 
         PostsPage,
         Authentication, 
         Checkout,
         Cart,
         LocalAttractions,
         PitchTypes,
         FAQ,
         TermsAndConditions
        } from "./pages";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userID" element={<User />}/>
          <Route path="/posts" element={<PostsPage />}/>
          <Route path="/posts/:postID" element={<PostDetail />}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/attractions" element={<LocalAttractions />}/>
          <Route path="/pitchtypes" element={<PitchTypes />}/>
          <Route path="/faq" element={<FAQ />}/>
          <Route path="/t&c" element={<TermsAndConditions />}/>
        <Route path="*" element={<Error />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/auth" element={<Authentication />} />
      <Route path="/checkout" element={<Checkout />} />
      
    </Routes>
       
    </>
  )
};

export default App;
