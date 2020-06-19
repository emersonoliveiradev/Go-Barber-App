import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Background from '~/components/Background'

// import { Container } from './styles';

export default function Dashboard() {
  return <Background />
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="event" size={20} color={tintColor} />
)

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon,
}

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
}
