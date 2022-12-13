
// You can import from local files
import AssetExample from './components/AssetExample';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AppRegistry } from 'react-native';

export default class RS extends Component {
    render() {
     return <AssetExample />;
    }
}
AppRegistry.registerComponent('RS', () => RS);
