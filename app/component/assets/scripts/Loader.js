import React from "react";
import { Container, Spinner ,View} from "native-base";

export default class Loader extends React.Component {
  render() {
    return (

        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Spinner color="#64b3f2" />
        </View>
    );
  }
}
