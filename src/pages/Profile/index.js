import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Background from '~/components/Background'

// import { Container } from './styles';

export default function Profile() {
  return <Background />
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="person" size={20} color={tintColor} />
)

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon,
}

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
}