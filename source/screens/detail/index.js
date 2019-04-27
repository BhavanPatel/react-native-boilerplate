//Global Libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import PropTypes from "prop-types";

//Local Libraries
import Global from "@common-functions";
import navigation from "@navigation/services";
import strings from "@language";

//Components
import { Container, Card, CardHeader } from "../../components/common";
import {
  Icon,
  Text,
  Button,
  Border,
  Scroll,
  Image
} from "../../components/controls";

//Styling
import { colors, images } from "../../theme";
import styles from "./styles";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }
  ///////////////////////
  //// FUNCTIONS ////////

  //// FUNCTIONS ////////
  ///////////////////////

  ////////////////////////
  ////// VIEW ////////////
  render() {
    return (
      <Container status="dark">
        {this.renderNavbar()}
        {this.renderContent()}
      </Container>
    );
  }

  // Navigation Bar
  renderNavbar = () => (
    <Border theme="navbar" transparent bstyle={styles.header}>
      <Button theme="navbar.left" onPress={navigation.pop}>
        <Icon color={colors.black} name="mt chevron-left" size={30} />
      </Button>
      <Text bold color={colors.black} size={25}>
        {this.state.title}
      </Text>
    </Border>
  );

  // Content
  renderContent = () => (
    <Scroll>
      <View style={styles.container}>
        <Card>
          <CardHeader>
            <Text color={colors.black} bold size={25}>
              {strings.cardDetail}
            </Text>
          </CardHeader>
          <Image uri={images.user_img_url} style={styles.icon} />
          <Text color={colors.black}>{Global.getRandom(500)}</Text>
          <Image file={images.user_img} style={styles.icon} />
        </Card>
      </View>
    </Scroll>
  );

  ////// VIEW ////////////
  ////////////////////////
}

Detail.propTypes = {
  title: PropTypes.string
};

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(Detail);
