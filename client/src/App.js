
import './App.css';




const BookingLayout = ({ children }) => {
 


  return (
    <>
      <AppHeader/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>

  
    <Switch>
      <Route
        path="/"
        render={() => (
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/appointments" component={Appointments} />
              <Route path="/test-centers" component={TestCenters} />
              <Route
                    path="/test-centers"
                    render={(props) => <TestCenterList {...props} testCenters={testCenters} />}
        />
              <Route
                  path="/test-center/:id"
                  render={(props) => {
                  const testCenter = testCenters.find((tc) => tc.id === parseInt(props.match.params.id, 10));
                  return testCenter ? <TestCenter {...props} testCenter={testCenter} /> : null;
          }}
        />
            </Switch>
          </MainLayout>
        )}
      />
    </Switch>
    </Router>
  );
}

export default App;
