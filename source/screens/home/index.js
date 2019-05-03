//Global Libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import PropTypes from "prop-types";

//Local Libraries
import apis from "@apis";
import navigation from "@navigation/services";
import log from "@log";
import strings from "@language";

//Components
import { Container, Card } from "../../components/common";
import { Icon, Text, Button, Border, Scroll } from "../../components/controls";

//Styling
import { colors } from "../../theme";
import styles from "./styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      citiesCount: 0
    };
  }

  componentDidMount() {
    this.getData();
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

  goToDetail = title => {
    navigation.detail({ title: title });
  };

  //// FUNCTIONS ////////
  ///////////////////////

  ////////////////////////
  ////// VIEW ////////////

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
          {this.renderCard(strings.detail)}
          {this.renderCard(strings.pureDetail)}
          {this.renderCard(strings.clickHere)}
        </View>
      </Scroll>
    );
  };

  // Card
  renderCard = name => {
    const { colors } = this.props.theme;
    return (
      <Card style={styles.card} button onPress={() => this.goToDetail(name)}>
        <View style={styles.button}>
          <Text bold color={colors} size={50}>
            {name}
          </Text>
        </View>
      </Card>
    );
  };

  render() {
    return (
      <Container>
        {this.renderNavbar()}
        {this.renderContent()}
      </Container>
    );
  }
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
