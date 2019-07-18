import { Navigation } from 'react-native-navigation';
import React, { Component } from "react";
import { Provider } from "react-redux";

export const reduxStoreWrapper = (Component, store, props) => (
    <Provider store={store}>
        <Component {...props} />
    </Provider>
);


export const showCreate = async() => {
  await Navigation.showModal({
      stack:{
          children:[
              {
                  component:{
                      name:'Create',
                      id:'Create',
                      options:{
                          topBar:{
                              visible:false,
                              height:0
                          }
                      }
                  }
              }
          ]
      }
  })
};

export const showAddTime = async (props = {}) => {
    await Navigation.showModal({
        stack:{
            children:[
                {
                    component:{
                        name:'Time',
                        id:'Time',
                        options:{
                            topBar:{
                                visible:false,
                                height:0
                            }
                        },
                        passProps:{
                            ...props
                        }
                    }
                }
            ]
        }
    })
}

export const closeModal = async (componentId) => {
    await Navigation.dismissModal(componentId)
};
