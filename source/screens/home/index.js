import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import PropTypes from "prop-types";

import apis from "@apis";
import local from "@local-db";
import navigation from "@navigation/services";

import { setTheme } from "../../redux/actions/theme.actions";

import { Container, Card } from "../../components/common";
import { Icon, Text, Button, Border, Scroll } from "../../components/controls";

import { colors } from "../../theme";
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
  }

  ///////////////////////
  //// FUNCTIONS ////////
  getData = () => {
    apis
      .getCities()
      .then(res => {
        if (res.ok) {
          this.setState({
            cities: res.data.cities,
            citiesCount: res.data.count
          });
        } else {
          console.log(res.problem);
        }
      })
      .catch(err => {
        console.log(err);
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

  goToDetail = title => {
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
      <Container>
        {this.renderNavbar()}
        {this.renderContent()}
      </Container>
    );
  }

  // Loading
  renderLoading = () => (
    <View style={styles.loader}>
      <Text bold color={colors.black} size={44}>
        Loading...
      </Text>
    </View>
  );

  // Navigation Bar
  renderNavbar = () => (
    <Border theme="navbar" transparent bstyle={styles.header}>
      <Text bold color={colors.black} size={25}>
        Welcome
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
          {this.renderCard("Detail")}
          {this.renderCard("Pure Detail")}
          {this.renderCard("Click Here")}
        </View>
      </Scroll>
    );
  };

  // Card
  renderCard = name => {
    return (
      <Card style={styles.card} button onPress={() => this.goToDetail(name)}>
        <View style={styles.button}>
          <Text bold color={colors.black} size={50}>
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
  dispatch: PropTypes.func
};

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(Home);
