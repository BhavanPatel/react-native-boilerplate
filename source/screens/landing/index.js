//Global Libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import PropTypes from "prop-types";

//Local Libraries
import Global from "@common-functions";
import local from "@local-db";
import navigation from "@navigation/services";

//Redux
import { setTheme } from "../../redux/actions/theme.actions";
import { setLanguage } from "../../redux/actions/language.actions";

//Components
import { Container, Loader } from "../../components/common";

//Styling
import styles from "./styles";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.getSavedTheme();
    this.setLanguage();
  }

  ///////////////////////
  //// FUNCTIONS ////////

  getSavedTheme = async () => {
    const { dispatch } = this.props;
    const localTheme = await local.getOne("appTheme");
    if (localTheme) {
      dispatch(setTheme(localTheme.data));
    }
    setTimeout(() => {
      this.setState({ loading: false }, () => {
        this.goToHome();
      });
    }, 2500);
  };

  setLanguage = () => {
    const { dispatch } = this.props;
    const code = "en";
    Global.setLanguage(code);
    dispatch(setLanguage(code));
  };

  goToHome = () => {
    navigation.replace("home");
  };
  //// FUNCTIONS ////////
  ///////////////////////

  ////////////////////////
  ////// VIEW ////////////

  // Loading
  renderLoading = () => (
    <View style={styles.loader}>
      <Loader />
    </View>
  );

  render() {
    return <Container>{this.renderLoading()}</Container>;
  }

  ////// VIEW ////////////
  ////////////////////////
}

Landing.propTypes = {
  dispatch: PropTypes.func,
  theme: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(Landing);
