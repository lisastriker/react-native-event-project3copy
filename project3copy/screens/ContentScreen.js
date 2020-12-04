import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Container, Header, Content, Left, Thumbnail, Body, Right, List, ListItem} from "native-base";
const data = [
  {
  name:"Harry Potter",
  title:"Savior",
  company:"Aurors",
  pic:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxAPDxAOEBAQDRAQDw8PEBAPEA8PFRUWFhURFRUYHSggGBolHRUXITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFzAfHx0tLS0tKy0tLS0tLS0tKy0tLS0tLS0tLS0tLSstLS0rKy0tKy0tLS0tLS03LS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBAUGBwj/xAA5EAABAwIDBAgEBQQDAQAAAAABAAIRAyEEEjEFQVFhBhMicYGRofAHMkKxFFLB0eEjYpKicrLxgv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQACAwEBAQEAAAAAAAAAAAECEQMhMRJBgVH/2gAMAwEAAhEDEQA/APQMqUsV8IELo5qC1LlWRlS5UTSnKjCsyo5UTSuEwamARhFABMAiAiAoBCYBEBMAigGqRcdxPvzTQsLaG0GUoFi+JyyGgNP1OP0i3pYG6CPxMvc0WDTlJ/v7Mj/YLS9IenOBwTurc/rKsgGnSLSWE/nJIDfFeedJ+mletUq0MLUZSw/Xue6uey9znfM1hm7Zm8XXLdRVz5W5nBwJaSIc+IlwAvc8eKxc9OmOG/Xp+1/iXRZSJojNVIhgIJYCdSXbwOWptbVY2C+JQNam14DKIbD3EFznE3BaBefvOnDy3EU4cJeMwgki4F79902I7cu+UTadY0EBT6rXxHsOH6esfjvw9I52upus/KwNrNuGBwnUTrpC6zY+16WLYHUp+RjntMSwuAOQxabr5sovewgsLgRIBaYI46L0X4e9LKODpGnUae0AS81WuzRZoAGncYWpkxcdPXoQIS4XENqNDmkEESIMg9xVpC0zpWWpSFaQgQiKoQhWEIQgrhKQrYQhE0rhKWq2EIVFJCBari1KWoiktSlqvypcqppRlUV2VRNmmZCBarIUhZa0qIQhWwhCCqFIVkIQgSEYTQjCBQEwCICMIIAiAiAmARVdV4a0uNgASe5eM9N+lNSrWqU8O4dVUYxtQgQ6oRMQdcsHTQ/f03pw8s2bjHCezh3ExY5bZr90r5+w2KcavXOgkuOVukk8Bw/RZyum8JuqOrMzcRpaIH2CtFepeARIiQ6BHMzfU+a9W6M9CKVSgypVGZ7xmg2DSdBHBZOK+HbCZaBodf4uuO3omM/15BSpsAB+cg3EANaNLk6nkJ0TPD6pgSBG4yPOAF0PSXoo/D1Dma4N+kmCY4CLLTTkBbmqQN0AgnzlNlx0DP6bDBGsZuJOoB3qisXNyxmBNwNDG53JVte59RsANDZgn6W6kxvKrdmJJccxJk3uRuVjFe3/AAzZin0euxFSo/MBkaXdkNtDiIF7RvXcLyT4N7W7VXDveZt1QdeJPabE78og6d039cDYXaeOF9KQgQnhBUVwhCchCEQkIQnIUhEVwhCshAhBXCEKyEsIEhKQrIQhEV5VFZCiuxkwpCIRUbLCEJ0sIhYQhOggWFITQpCAAJgEAE4QABFFGEVq+lGHbVwGMpvOVrsHXDna5R1bu14ar5y2UC/EUmgXdUbTaOEkT6lfSPSMH8DjMrOsd+CxGWn+c9W6G+Oi+eeg9PNtPBNNx1znd8Nc4H0lYzb4/X0Ps+mKdNjAIhoHkFsaRB5rg+mJxdcjD4d4oUhDq1Y6v4MHLeeNlzOO2NtLDtD6e0KrgBmPaqMjwLgI7lx3p6Pi163j9mUq7ctRjXDmF57tv4fBji6k0vYfpb8zRw5j3zW+6Fbdr16ZbXOd1NgHWfnixJ5rluk/TXHdY6lhy1kVCA5okkCQAJHuFLqrjMp00mO6H1ACWEsMWD7SecfdcftnA1qPz03MIMO3tfzDtF2eKxW2yBWfkdeYs0nkRAB9FZt2u3FbNqVMuR7IzsJux4IDm8+9JbDKbaX4UUadTalEP1DH1GcRUZDh4Rm9F9Arxr4JYFjsZiaxbJo0Ghhv2TUcQ4+IYvZl6cfHky9KUEyCqFQITIIFhSEykIEhCE8IQiEhSE8IQgSEpCshCERXCishRBaFEAijSIIoFACgipCAIowpCABMooEDBFAJgghbIg6Gy8XHR78DtTAsc5uZtUsb+Z1FrC1j+YP6L2lch8Qg2mzD4ksBczF0m5soJAcYjN9INvJYz8b4722WM2WMRSiXNdqCwlpnvF55rQYbodTbiDV6qq2WvtnbkD3Max1RpHaBOVp11AXXbNfYTwWwLwFykd7k1uydlUsM0tpiCWnMbS535jFpXK4foxRl+ILqgeesBdT+YOMgODhdsawIneuzo4hji8B7CW2IDgS08DwK1eycQwPfSzscJMZXBx8RuUWW9uGGzMVIacS6uetc54qtPYYTMNMkiOGkWg6qvphhRSweIj6qbZje4ua3TxXp+JytaTbReY9O3mq1tBgLnV6zGNaNSAQVNdrvptfg3sR2HwtatUBbUr1GiHWIYwGLd73L0Fa7o9gDhsJRomMzKYDo/Mbn1K2C9M8eTL1EpRKCqIgoogiiiKAKIqIBCEJkEAhCEyiBIUTwoiIFFEQigoiogCiKiAKIowgCiMIoIEygCKALlviZTqHZtR1OP6dWhWqAmJpsqNc6PT1XVgKrF4dtWm+k8S2oxzHDi1wg/dKTpxvRfpKyq1wcQMgu71Wtq/EmnNQtDQNKZcbkzElee41uI2fi6mFeYNN5uYHWUjOV/cQV3HQr8C8EVKFGrWe4kEtztAEQBPIheXKWdPZjcbNtfV2pTxTqpY6jh673NL6tEspl8XPWn6x/Kxdk7UpYGuXgUnESar6cEuJMGXA9oyZXcbTxGEpPDX4bDiZJPVsJFiZNrLEqbM2diWh78NQiPnLAIA5Cyz/XXfXjLwfSWnjKbshjL82+x0uuSo4ttTbOzoILW16kzxyOj7ArTbVq0cFXqDCOe1jmFhDjmDj/ABHqtt8LNjfjMUcdVLsmFfFITapXcHS4/wBoB8+5b45bXDlsk09hKBKhKUlel5UKkpSUJRDSiklEFAyKCKKiKgRQCFIRUQLCkJlECqIqIFRUCKCKKKICooigCiKMIBCkIooAmAUARQRRRRB5F8csDD8LiGj5qb6Tz/xIc3/s5cDsXbVTDmGuc24GYXgGQde/7r2v4obO6/BAxJpVM8CxyxDo9D4Lw3aGzXCHszAOAN7X4gER4LlnrenbDcm46HF9Ks8Znm4AMjXLJbY8ViVukTg0im8gGTEkQCft+65U0KskknviZW22bs4EE1MzobZhhrTw3+7rn8yOkzyrDxmJNXKBO8vPOTf1XunwmwQpbLpuHzValSo7/KB6ALxTCbPfVqhobAL9AIm95817VsHaX4Kiyi5pdSYy2QDM12pgE3BW8cpK55YWzbsHFVlyqw+KZVY2pTdma9oc06WPEblHOXZ56YuUzKvMpmVTa0FOCqQVY0qKtCYKsFOEUwRShMioigigiiiKBVEUUFaIQRQRRFBAUQgiEBUUUQFQIJggKiiD3ACSgZazaNes8ijh3Bhc0uqYiA40mAgdhhsXuuBNhBJmADkVKpd3cOJ5qvC2qHg6kADzaSY/29CsZVrGK8S2SGuJdaCXRfviy5bGdDMNOek3JxaPljhC7BtPMSVWaJBO8LjY7y6edY/olhzdtKmCNTofsqcN0Xpi2W06SSAeN967nFYJ5daCOYVjMDlFxfuWdOn1HMYPYTKZBDQD+6sxmFcewAZccttzfqPlK6b8JlEny3qunhIJqOHaMNY3WN8d/Hu5LUx3WbyajAw2HLC0tsWNLQRuzQY/19VtGVJF/wCE9Kh4zv57z3fsrDRv5ea7S6ea4yqJRBVzqU96pc0g3W5XK42HaVa0qhqtaqRc1OFW1WBRqGTBKEyKiKgRQRRRRBFFFEFaISooCogEUERCCKBgogEUBRSqpz5sNEtJD1K0WFyqHGYJuSgBc+WiYAefFYtbk0Iaq43WsbbiFa0bwlqA66EaILqFxPMg+HufFOTxWNRqX3i0EfZwUqYjK4B0gE5Q76c3BYrc7ZRAF1j4nFMZqHnm1jnAeSLqu7jYKmnhndsEkAkZQHGIgSQN15CsS9BTxLXjMNL8IHMn9FZEm+nd6DgFG4dgvckGxcS643idFafZWmSGnf3+iNlZ73pRPLxnRAmSUAwGZCsI+yDSgxqmHi4uPX+UjVmF2vsLHqC/etSudx13DNTtVbU4VSLAmSBOEaEIqBRBFFFEEUQRQVSollSUZ2eVJSyiiiEyUIhFMEUAigSsYaVQ3QRy/RWYrT18ljNcSDxAkff33LNaxXC0+/BPHvmsd1USD+bLY94/QrIZce7rKiSlJ/e6YRp/Kk++PuVQr2T38dErxIIMX3a5j+6sj7+SqqmxgfwpSVMMQZibQIO4n36K0mTYaWVdFrX0y45mvkmGmxItr3BGhTgDzJJvdJ0tu1jQP4uifcKQiDu8VUH3xQt/CI/9UHf73oFeffJVtNr6XNoT1LzHMLBq1wGv5Fo3CS4wPuoMg7jOv6cEqDaoL4Hy0x5nX7fdViqDB433eCotarAqgrAtuSwJgkCYI0cIpQjKAqKIIIigogoUSypKMnCYKsFMCgdEJQUZRTBMEiYIrHxriACNRJjjGoWC+uB2xdm8jVh3grK2pUyhhtYnXTuWoqtDj/SeaT3XdTcM0xvy2Lh/cwyOegzW8Rq4zLVbTBBDxmB0sSL9xBK29OrPDlH3XnvSRmKYaNbDNa/qKjnPpsqMqNg/MW6OY7+0iO6Fu9gbcZXaHggjQ6W0A7llXWh8qTOm9YlKsD+l73WS2p943+qIYu9J4+KqrGbaD7p8wG8xztfhxSVagjX1QNhDlaBewJOvvenY+QPDwSU5ytdBktJIgR480g7jYd/l73qjI7+O/RNHsqhlTUd+qtLwgPvkgD7jRK88927eserUAGsqC6tXDQSd2+2i5bG7WZnMQ4B1FxaCJLmmoWtHfUFJv/0q+lfSJuEoPrVA4tb2Q1vzOcbZbrgOh/X4t9au9zYfUL8pl7GAgAtyi7rQDoCJBMEglej4baE08oMuqZiHDQsBl9Xuc6w4gdy2jH6DfGm8DctJgcN1cul1WoSCSRIncXGMvc0WHNbKgypMuMTcxOZ/7/ZBs5urGlUPMGNNPsmaV0cWQCnBVLSrAUU4KZIiCimlSUFEBUUUQYsqAoKIyaU0pEQgcFMCq0UFoKYFVApgUWVj7UEsEwQHXnRahtCk6xbpuka8YK37xNlScDTNsscmkgeQssZXt0xnTQ7QwVNzcr2OeADZzKVSByDlyfR7AmjiMTTpCqGvqUqha4Ux9LxbKbCw4L0PF7Lo5TY+n6hef7Dc5mOx7MKGmsW0QTUs1lMZ4cABckuP+IWdtadbhsQGDtwCP7tOXesg7QG7fHE2O6y5/E4P8O3rcXVdVrONqbRDRyAVOFo1n9qMgN2jfoqOm/HjkT3iff7I0nGpc3AmP/fNYGF2eTAN7eM95W4pUQALXsiHw1VwAbG479yOawOvgTryVtGnLA628GNRpv439Cq47IuZ8OCIqqPI8hvHvekOK98PBXvZKxq9EGSBNzc7u5FQbUZo4kHugW5qjFOc75BI8785VGLwBf8AKXDz9lUYPEYnDdl9PrGTYj5gJ/lBo+n1NtTZ1RtZjgQCWFlzmHLhb7LQfDQgU2h7QHFrT2nBtnCQdNCCCu16TNp43C1G0n5HhpJa4QflIMefotDsTZ4w9bBOc0FtTAUcO8EAxVpNlp8Wl3+Kfmz9kdnhn5rMAPDKCT5u/ZbPCYKCC7X9eJO9W4SIAAAHAAALMCm101m0qeVwduIjxCoY5bDabZpk8CCtQxy649xwzmqzGlWtKxWOV7Sqi4FMqwU4KjRlEEUUVEFEGJKIKiirBlFFFFMiFFEBCYIKIgg3TqKLll674+ExR7J7l5r0fpOZj9pYkhvVNfSpuMnPIa54bHAzryCiiz+tfjpsDgOvd11YyXTkaCYA58VsmUADFhuAA4qKLaMmm0DT10nwTm3L1n3KiiISiHjTKW3sR2hxg87J2i1+A8TxUURD+m+yqiZjT35qKIFaLyNJI0i6s6tBRBpOkVCm/qmloI6wk7php1PfCwqrQRp8pDm8i24UUXTCdOfJdZR0uzqsgdy2jHWUUXGPRVONH9N//ErQMciou3G8/L7F7HK9jkVFaxFrSrAVFFGjAoqKI0iiiiD/2Q=="
  },
  {
  name:"Hermione",
  title:"Genius",
  company:"Teacher",
  pic:"https://scontent.fsin9-1.fna.fbcdn.net/v/t1.0-9/92288679_2916358781736823_3006889110527803392_n.jpg?_nc_cat=111&ccb=2&_nc_sid=85a577&_nc_ohc=5Fs0u6G_RvUAX92uRnQ&_nc_ht=scontent.fsin9-1.fna&oh=068edbe94771c0b3ba282615e2b0a7ea&oe=5FED9792"
  },{
  name:"Ronald",
  title:"Buffon",
  company:"Jobless",
  pic:"https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg"
  },
  {
  name:"Ginny",
  title:"Wife",
  company:"Ministry of Witchcraft",
  pic:"https://upload.wikimedia.org/wikipedia/en/e/e7/Ginny_Weasley_poster.jpg"
    }]
export default function ContentScreen(){
    return(
      <Container>
        <Header />
        <Content>
          <List>
            {
              data.map((item)=>{
                return (
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: item.pic }} />
                    </Left>
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>
                        {item.title}
                      </Text>
                    </Body>
                    <Right>
                <Text note>{item.company}</Text>
                    </Right>
                  </ListItem>
                );
              })
            }
          </List>
        </Content>
      </Container>
    );
  }