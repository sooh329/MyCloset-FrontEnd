import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';

const LoadingScreen = () => {
    const opacity = useRef(new Animated.Value(1)).current; // 초기값 1 (불투명)
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (imageLoaded) {
            // 이미지 로드가 완료된 후 애니메이션 시작
            Animated.timing(opacity, {
                toValue: 0, // 투명도 0으로 변화
                duration: 4000, // 4초 동안 애니메이션
                useNativeDriver: true,
            }).start();
        }
    }, [imageLoaded]);

    return (
        <Animated.View style={[styles.container, { opacity }]}>
            <Image
                source={require('../assets/loadingIcon.png')}
                style={{ width: 100, height: 100 }}
                onLoad={() => setImageLoaded(true)} // 이미지 로드 완료 시 imageLoaded를 true로 설정
            />
            <Text>나만의 스타일 나만의 옷장</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEECEC',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default LoadingScreen;
