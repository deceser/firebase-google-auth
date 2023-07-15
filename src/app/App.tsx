import AppRouter from "./AppRouter";

import DefaultLayout from "src/layouts/default";

type Props = {};

const App = (props: Props) => {
  return (
    <DefaultLayout>
      <AppRouter />
    </DefaultLayout>
  );
};

export default App;
