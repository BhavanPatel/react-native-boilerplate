//Global Libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import PropTypes from "prop-types";

//Local Libraries
import Global from "@common-functions";
import apis from "@apis";
import local from "@local-db";
import navigation from "@navigation/services";
import log from "@log";
import strings from "@language";

//Redux
import { setTheme } from "../../redux/actions/theme.actions";
import { setLanguage } from "../../redux/actions/language.actions";

//Components
import { Container, Card } from "../../components/common";
import { Icon, Text, Button, Border, Scroll } from "../../components/controls";

//Styling
import { colors, themes } from "../../theme";
import styles from "./styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cities: [],
      citiesCount: 0
    };
  }

  componentDidMount() {
    this.getSavedTheme();
    this.getData();
    this.setLanguage();
  }

  ///////////////////////
  //// FUNCTIONS ////////
  getData = () => {
    apis
      .getCities()
      .then(res => {
        if (res.ok) {
          log.success("API Calling Success :-", res.data);
          this.setState({
            cities: res.data.cities,
            citiesCount: res.data.count
          });
        } else {
          log.error("API Calling Failed :-", res.problem);
          log.info("API Calling Failed Detail:-", res);
        }
      })
      .catch(err => {
        log.error("API Calling Failed :-", err);
      });
  };

  getSavedTheme = async () => {
    const { dispatch } = this.props;
    const localTheme = await local.getOne("appTheme");
    if (localTheme) {
      dispatch(setTheme(localTheme.data));
    }
    this.setState({ loading: false });
  };

  setLanguage = () => {
    const { dispatch } = this.props;
    const code = "en";
    Global.setLanguage(code);
    dispatch(setLanguage(code));
  };

  goToDetail = (title, index) => {
    const { dispatch } = this.props;
    dispatch(setTheme(themes[index]));
    navigation.detail({ title: title });
  };

  //// FUNCTIONS ////////
  ///////////////////////

  ////////////////////////
  ////// VIEW ////////////
  render() {
    const loading = this.state.loading;
    if (loading) {
      return <Container>{this.renderLoading()}</Container>;
    }
    return (
      <Container status="dark">
        {this.renderNavbar()}
        {this.renderContent()}
      </Container>
    );
  }

  // Loading
  renderLoading = () => (
    <View style={styles.loader}>
      <Text bold color={colors.black} size={44}>
        {strings.loading}
      </Text>
    </View>
  );

  // Navigation Bar
  renderNavbar = () => (
    <Border theme="navbar" transparent bstyle={styles.header}>
      <Text bold color={colors.black} size={25}>
        {strings.welcome}
      </Text>
      <Button theme="navbar.right" onPress={navigation.detail}>
        <Icon color={colors.black} name="mt bubble-chart" size={30} />
      </Button>
    </Border>
  );

  // Content
  renderContent = () => {
    return (
      <Scroll>
        <View style={styles.container}>
          {this.renderCard(strings.detail, 0)}
          {this.renderCard(strings.pureDetail, 1)}
          {this.renderCard(strings.clickHere, 2)}
        </View>
      </Scroll>
    );
  };

  // Card
  renderCard = (name, index) => {
    const { colors } = this.props.theme;
    return (
      <Card
        style={styles.card}
        button
        onPress={() => this.goToDetail(name, index)}
      >
        <View style={styles.button}>
          <Text bold color={colors} size={50}>
            {name}
          </Text>
        </View>
      </Card>
    );
  };

  ////// VIEW ////////////
  ////////////////////////
}

Home.propTypes = {
  dispatch: PropTypes.func,
  theme: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(Home);
