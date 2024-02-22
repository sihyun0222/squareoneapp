import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Svg, Path } from "react-native-svg";
import Settings from '../components/Settings.js'

function TopNavBar(){
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    return(
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.iconButtons}>
                <Svg style={styles.icons} width="35" height="35" viewBox="8 9 37 37" fill="none">
                    <Path 
                        d="M30.2084 20.8339C30.2084 19.1849 32.4016 18.7478 32.9835 20.2908C34.3911 24.0231 35.4167 27.362 35.4167 29.1671C35.4167 34.9201 30.753 39.5838 25 39.5838C19.2471 39.5838 14.5834 34.9201 14.5834 29.1671C14.5834 27.2277 15.7671 23.518 17.3366 19.452C19.3697 14.185 20.3862 11.5514 21.641 11.4096C22.0425 11.3642 22.4806 11.4458 22.8388 11.6327C23.9584 12.2169 23.9584 15.0893 23.9584 20.8339C23.9584 22.5598 25.3575 23.9589 27.0834 23.9589C28.8092 23.9589 30.2084 22.5598 30.2084 20.8339Z" 
                        fill="#F79400" 
                        stroke="#33363F" 
                        strokeWidth="3"
                    />
                    <Path 
                        d="M28.5 34C28.5 36.753 26.6885 38.5 25 38.5C23.3115 38.5 21.5 36.753 21.5 34C21.5 31.247 23.3115 29.5 25 29.5C26.6885 29.5 28.5 31.247 28.5 34Z" 
                        fill="#FFD704" 
                        stroke="#33363F" 
                        strokeWidth="3"
                    />
                </Svg>
                <Text style={styles.scores}>
                    {/*placeholder streak amount*/}
                    6
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButtons}>
                <Svg style={styles.icons} width="43" height="35" viewBox="0 0 35 35" fill="none">
                    <Path
                        d="M6.49054 20.2828L16.8153 29.9818C17.1397 30.2866 17.302 30.439 17.5 30.439C17.698 30.439 17.8602 30.2866 18.1847 29.9818L28.5094 20.2828C31.3622 17.6029 31.7086 13.193 29.3093 10.1005L28.8581 9.51903C25.9879 5.81959 20.2265 6.44002 18.2097 10.6657C17.9248 11.2626 17.0751 11.2626 16.7903 10.6657C14.7734 6.44002 9.01207 5.81959 6.14181 9.51904L5.69067 10.1005C3.29136 13.193 3.63779 17.6029 6.49054 20.2828Z" 
                        fill="#FF4D4D" 
                        stroke="#33363F" 
                        strokeWidth="3"
                    />
                </Svg>
                <Text style={styles.scores}>
                    {/*placeholder heart amount*/}
                    3
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButtons}>
                <Svg style={styles.icons} width="37" height="35" viewBox="0 -1 35 35" fill="none">
                    <Path
                        d="M17.5 29.1667L6.51304 15.433C6.18053 15.0173 6.01427 14.8095 5.9696 14.559C5.92493 14.3086 6.00909 14.0561 6.17742 13.5511L7.83831 8.56842C8.27833 7.24838 8.49833 6.58836 9.02211 6.21084C9.54588 5.83333 10.2416 5.83333 11.633 5.83333H23.367C24.7584 5.83333 25.4541 5.83333 25.9779 6.21084C26.5017 6.58836 26.7217 7.24838 27.1617 8.56842L28.8226 13.5511L28.8226 13.5511C28.9909 14.0561 29.0751 14.3086 29.0304 14.559C28.9858 14.8095 28.8195 15.0173 28.487 15.433L17.5 29.1667Z" 
                        fill="#DE58FF"
                    />
                    <Path
                        d="M17.5 29.1667L6.51304 15.433C6.18053 15.0173 6.01427 14.8095 5.9696 14.559C5.92493 14.3086 6.00909 14.0561 6.17742 13.5511L7.83831 8.56842C8.27833 7.24838 8.49833 6.58836 9.02211 6.21084C9.54588 5.83333 10.2416 5.83333 11.633 5.83333H23.367C24.7584 5.83333 25.4541 5.83333 25.9779 6.21084C26.5017 6.58836 26.7217 7.24838 27.1617 8.56842L28.8226 13.5511C28.9909 14.0561 29.0751 14.3086 29.0304 14.559C28.9858 14.8095 28.8195 15.0173 28.487 15.433L17.5 29.1667ZM17.5 29.1667L22.6042 13.125M17.5 29.1667L12.3958 13.125M28.4375 14.5833L22.6042 13.125M22.6042 13.125L20.4167 7.29166M22.6042 13.125H12.3958M14.5833 7.29166L12.3958 13.125M12.3958 13.125L6.56251 14.5833" 
                        stroke="#33363F" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                    />
                </Svg>
                <Text style={styles.scores}>
                    {/*placeholder gem amount*/}
                    425
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButtons} onPress={()=>setIsModalVisible(true)}>
                <Svg style={styles.icons} width="35" height="35" viewBox="0 1 35 35" fill="none">
                    <Path
                        d="M20.5968 4.71766H19.0968V4.79248L19.1042 4.86692L20.5968 4.71766ZM20.5968 4.71765H22.0968V4.64283L22.0893 4.56839L20.5968 4.71765ZM20.6532 5.282L19.1606 5.43125V5.43126L20.6532 5.282ZM23.9097 6.63091L22.9599 5.46997V5.46997L23.9097 6.63091ZM24.3487 6.27179L25.2985 7.43273L25.2985 7.43272L24.3487 6.27179ZM27.0294 6.40549L28.09 5.34483L27.0294 6.40549ZM28.5944 7.97059L27.5338 9.03125V9.03125L28.5944 7.97059ZM29.526 9.2678L31.0242 9.19308L31.0242 9.19308L29.526 9.2678ZM28.7282 10.6513L29.8891 11.6011L29.8891 11.6011L28.7282 10.6513ZM28.369 11.0902L27.2081 10.1404L27.2081 10.1404L28.369 11.0902ZM29.7179 14.3468L29.5686 15.8394H29.5686L29.7179 14.3468ZM30.2823 14.4032L30.4316 12.9107H30.4316L30.2823 14.4032ZM31.8248 14.8173L32.937 13.8108L32.937 13.8108L31.8248 14.8173ZM31.8248 20.1827L32.937 21.1892L32.937 21.1892L31.8248 20.1827ZM30.2823 20.5968V22.0968H30.3572L30.4316 22.0893L30.2823 20.5968ZM30.2823 20.5968V19.0968H30.2075L30.1331 19.1042L30.2823 20.5968ZM29.7185 20.6532L29.5692 19.1606H29.5692L29.7185 20.6532ZM28.3695 23.9097L29.5305 22.9599L28.3695 23.9097ZM28.7282 24.3481L27.5673 25.2979L27.5673 25.2979L28.7282 24.3481ZM29.5261 25.7316L31.0242 25.8063V25.8063L29.5261 25.7316ZM25.7322 29.5255L25.8069 31.0236H25.8069L25.7322 29.5255ZM24.3487 28.7276L25.2986 27.5666L25.2986 27.5666L24.3487 28.7276ZM23.9098 28.3685L22.9599 29.5294H22.9599L23.9098 28.3685ZM20.6533 29.7174L19.1607 29.5681V29.5681L20.6533 29.7174ZM20.5968 30.2823L19.1042 30.1331L19.0968 30.2075V30.2823H20.5968ZM20.5968 30.2824L22.0893 30.4316L22.0968 30.3572V30.2824H20.5968ZM20.1827 31.8248L21.1892 32.937L21.1892 32.937L20.1827 31.8248ZM14.8173 31.8248L13.8108 32.937L13.8108 32.937L14.8173 31.8248ZM14.3468 29.7179L12.8542 29.8672L14.3468 29.7179ZM13.5489 27.0386L12.9749 28.4245L12.9749 28.4245L13.5489 27.0386ZM11.0902 28.369L12.0401 29.53H12.0401L11.0902 28.369ZM10.6512 28.7282L9.70134 27.5673L9.70133 27.5673L10.6512 28.7282ZM9.26772 29.5261L9.19299 31.0242L9.193 31.0242L9.26772 29.5261ZM7.97051 28.5945L6.90984 29.6552H6.90985L7.97051 28.5945ZM6.40541 27.0294L7.46607 25.9688L7.46607 25.9688L6.40541 27.0294ZM5.47383 25.7322L6.97197 25.6575V25.6575L5.47383 25.7322ZM6.27171 24.3487L7.43264 25.2986L7.43264 25.2986L6.27171 24.3487ZM6.63089 23.9098L7.79182 24.8596H7.79182L6.63089 23.9098ZM5.28198 20.6532L5.43123 19.1606H5.43123L5.28198 20.6532ZM4.71765 20.5968L4.8669 19.1042L4.79246 19.0968H4.71765V20.5968ZM4.71763 20.5968L4.56837 22.0893L4.64281 22.0968H4.71763V20.5968ZM3.1752 20.1827L4.28738 19.1762L4.28738 19.1762L3.1752 20.1827ZM3.1752 14.8173L2.06303 13.8108L2.06302 13.8108L3.1752 14.8173ZM4.71765 14.4032L4.8669 15.8958H4.8669L4.71765 14.4032ZM5.28253 14.3467L5.13327 12.8542H5.13327L5.28253 14.3467ZM7.96181 13.5489L6.57599 12.9749L6.57599 12.9749L7.96181 13.5489ZM6.63143 11.0902L7.79237 10.1403L7.79237 10.1403L6.63143 11.0902ZM6.27177 10.6506L5.11084 11.6005L5.11084 11.6005L6.27177 10.6506ZM6.40547 7.96993L5.34481 6.90927V6.90927L6.40547 7.96993ZM7.97057 6.40483L6.90991 5.34417L6.90991 5.34417L7.97057 6.40483ZM10.6513 6.27113L11.6011 5.11019L11.6011 5.11019L10.6513 6.27113ZM11.0903 6.63034L10.1404 7.79127L10.1404 7.79127L11.0903 6.63034ZM14.3468 5.28143L12.8543 5.13217V5.13218L14.3468 5.28143ZM14.4032 4.71766L15.8958 4.86692V4.86692L14.4032 4.71766ZM14.8173 3.17522L13.8108 2.06304L13.8108 2.06304L14.8173 3.17522ZM20.1827 3.17522L19.1762 4.2874L19.1762 4.2874L20.1827 3.17522ZM22.0968 4.71766V4.71765H19.0968V4.71766H22.0968ZM22.1457 5.13275L22.0893 4.56841L19.1042 4.86692L19.1606 5.43125L22.1457 5.13275ZM22.0251 6.57547C22.4241 6.74076 22.4366 7.08389 22.3607 6.78239C22.2844 6.47877 22.2325 6.00022 22.1457 5.13274L19.1606 5.43126C19.2372 6.19732 19.3079 6.94392 19.4514 7.51431C19.5954 8.08683 19.9252 8.95284 20.877 9.34711L22.0251 6.57547ZM22.9599 5.46997C22.2851 6.02203 21.9101 6.32375 21.6414 6.48443C21.3746 6.64399 21.626 6.41019 22.0251 6.57547L20.877 9.34711C21.8289 9.74138 22.6744 9.36218 23.1811 9.05919C23.6859 8.75733 24.2637 8.27936 24.8596 7.79185L22.9599 5.46997ZM23.3988 5.11085L22.9599 5.46997L24.8596 7.79185L25.2985 7.43273L23.3988 5.11085ZM25.8069 3.97578C25.1909 3.94506 24.704 4.16913 24.3521 4.38856C24.0365 4.58534 23.7006 4.86389 23.3988 5.11085L25.2985 7.43272C25.4691 7.29315 25.5994 7.18666 25.7129 7.09836C25.8267 7.00976 25.8961 6.96124 25.9394 6.93421C25.9816 6.90789 25.9684 6.9216 25.914 6.93941C25.8491 6.96065 25.7587 6.97711 25.6574 6.97205L25.8069 3.97578ZM28.09 5.34483C27.8142 5.06906 27.5078 4.75847 27.2133 4.53127C26.885 4.27791 26.4228 4.0065 25.8069 3.97578L25.6574 6.97205C25.5561 6.967 25.4678 6.94163 25.4053 6.91404C25.353 6.8909 25.3412 6.87595 25.3806 6.90634C25.421 6.93755 25.4852 6.99272 25.5897 7.09221C25.6938 7.19136 25.8128 7.31029 25.9687 7.46615L28.09 5.34483ZM29.6551 6.90993L28.09 5.34483L25.9687 7.46615L27.5338 9.03125L29.6551 6.90993ZM31.0242 9.19308C30.9934 8.57715 30.722 8.11492 30.4687 7.78659C30.2415 7.49217 29.9309 7.1857 29.6551 6.90993L27.5338 9.03125C27.6896 9.1871 27.8086 9.30616 27.9077 9.41027C28.0072 9.51473 28.0624 9.57892 28.0936 9.61936C28.124 9.65875 28.109 9.64696 28.0859 9.59461C28.0583 9.53217 28.0329 9.44384 28.0279 9.34253L31.0242 9.19308ZM29.8891 11.6011C30.1361 11.2993 30.4146 10.9634 30.6114 10.6479C30.8308 10.296 31.0549 9.80901 31.0242 9.19308L28.0279 9.34252C28.0228 9.24121 28.0393 9.15079 28.0605 9.08592C28.0783 9.03152 28.0921 9.0183 28.0657 9.06052C28.0387 9.10387 27.9902 9.17323 27.9016 9.28707C27.8133 9.40053 27.7068 9.53083 27.5672 9.70142L29.8891 11.6011ZM29.5299 12.0401L29.8891 11.6011L27.5672 9.70142L27.2081 10.1404L29.5299 12.0401ZM28.4244 12.9749C28.5897 13.374 28.3559 13.6254 28.5155 13.3586C28.6762 13.0899 28.9779 12.7148 29.5299 12.0401L27.2081 10.1404C26.7205 10.7362 26.2426 11.3141 25.9407 11.8189C25.6377 12.3256 25.2585 13.1711 25.6528 14.123L28.4244 12.9749ZM29.8672 12.8542C28.9997 12.7675 28.5211 12.7156 28.2175 12.6392C27.916 12.5634 28.2591 12.5759 28.4244 12.9749L25.6528 14.123C26.0471 15.0748 26.9131 15.4046 27.4856 15.5486C28.056 15.6921 28.8026 15.7627 29.5686 15.8394L29.8672 12.8542ZM30.4316 12.9107L29.8672 12.8542L29.5686 15.8394L30.1331 15.8958L30.4316 12.9107ZM32.937 13.8108C32.5231 13.3536 32.0204 13.1677 31.6164 13.074C31.2541 12.99 30.8196 12.9495 30.4316 12.9107L30.1331 15.8958C30.3524 15.9177 30.5198 15.9346 30.6625 15.9523C30.8056 15.9702 30.889 15.9849 30.9388 15.9965C30.9872 16.0077 30.9682 16.0081 30.9171 15.9822C30.8562 15.9513 30.7807 15.899 30.7126 15.8238L32.937 13.8108ZM33.5833 16.3933C33.5833 16.0033 33.5862 15.567 33.5387 15.1981C33.4857 14.7868 33.3508 14.2681 32.937 13.8108L30.7126 15.8238C30.6445 15.7486 30.6 15.6682 30.5754 15.6046C30.5547 15.5512 30.5569 15.5323 30.5633 15.5816C30.5698 15.6323 30.5762 15.7167 30.5797 15.8609C30.5832 16.0046 30.5833 16.1729 30.5833 16.3933H33.5833ZM33.5833 18.6067V16.3933H30.5833V18.6067H33.5833ZM32.937 21.1892C33.3508 20.7319 33.4857 20.2132 33.5387 19.8019C33.5862 19.433 33.5833 18.9967 33.5833 18.6067H30.5833C30.5833 18.8271 30.5832 18.9954 30.5797 19.1391C30.5762 19.2833 30.5698 19.3677 30.5633 19.4184C30.5569 19.4677 30.5547 19.4488 30.5754 19.3955C30.6 19.3318 30.6445 19.2514 30.7126 19.1762L32.937 21.1892ZM30.4316 22.0893C30.8197 22.0505 31.2541 22.01 31.6164 21.926C32.0204 21.8323 32.5232 21.6464 32.937 21.1892L30.7126 19.1762C30.7807 19.101 30.8562 19.0487 30.9171 19.0178C30.9682 18.9919 30.9872 18.9923 30.9388 19.0035C30.889 19.0151 30.8056 19.0298 30.6625 19.0477C30.5198 19.0654 30.3524 19.0823 30.1331 19.1042L30.4316 22.0893ZM30.2823 22.0968H30.2823V19.0968H30.2823V22.0968ZM29.8677 22.1457L30.4316 22.0893L30.1331 19.1042L29.5692 19.1606L29.8677 22.1457ZM28.425 22.025C28.2597 22.4241 27.9166 22.4366 28.2181 22.3607C28.5217 22.2843 29.0002 22.2325 29.8677 22.1457L29.5692 19.1606C28.8031 19.2372 28.0565 19.3079 27.4861 19.4514C26.9136 19.5954 26.0476 19.9251 25.6533 20.877L28.425 22.025ZM29.5305 22.9599C28.9784 22.2851 28.6767 21.9101 28.516 21.6414C28.3565 21.3745 28.5903 21.626 28.425 22.025L25.6533 20.877C25.2591 21.8288 25.6383 22.6744 25.9413 23.181C26.2431 23.6858 26.7211 24.2637 27.2086 24.8596L29.5305 22.9599ZM29.8892 23.3982L29.5305 22.9599L27.2086 24.8596L27.5673 25.2979L29.8892 23.3982ZM31.0242 25.8063C31.055 25.1904 30.8309 24.7034 30.6114 24.3515C30.4147 24.0359 30.1361 23.7001 29.8892 23.3982L27.5673 25.2979C27.7069 25.4685 27.8134 25.5988 27.9017 25.7123C27.9903 25.8261 28.0388 25.8955 28.0658 25.9388C28.0921 25.9811 28.0784 25.9678 28.0606 25.9134C28.0394 25.8486 28.0229 25.7582 28.028 25.6568L31.0242 25.8063ZM29.6552 28.0894C29.9309 27.8137 30.2415 27.5072 30.4687 27.2128C30.7221 26.8844 30.9935 26.4222 31.0242 25.8063L28.028 25.6568C28.033 25.5555 28.0584 25.4672 28.086 25.4048C28.1091 25.3524 28.1241 25.3406 28.0937 25.38C28.0625 25.4205 28.0073 25.4846 27.9078 25.5891C27.8086 25.6932 27.6897 25.8123 27.5339 25.9681L29.6552 28.0894ZM28.0901 29.6545L29.6552 28.0894L27.5339 25.9681L25.9688 27.5332L28.0901 29.6545ZM25.8069 31.0236C26.4229 30.9929 26.8851 30.7215 27.2134 30.4681C27.5078 30.2409 27.8143 29.9303 28.0901 29.6545L25.9688 27.5332C25.8129 27.6891 25.6938 27.808 25.5897 27.9072C25.4853 28.0066 25.4211 28.0618 25.3806 28.093C25.3413 28.1234 25.353 28.1085 25.4054 28.0853C25.4678 28.0577 25.5562 28.0324 25.6575 28.0273L25.8069 31.0236ZM23.3989 29.8885C23.7007 30.1355 24.0366 30.414 24.3521 30.6108C24.7041 30.8302 25.191 31.0543 25.8069 31.0236L25.6575 28.0273C25.7588 28.0223 25.8492 28.0387 25.9141 28.06C25.9685 28.0778 25.9817 28.0915 25.9395 28.0652C25.8961 28.0381 25.8268 27.9896 25.7129 27.901C25.5995 27.8127 25.4692 27.7062 25.2986 27.5666L23.3989 29.8885ZM22.9599 29.5294L23.3989 29.8885L25.2986 27.5666L24.8597 27.2075L22.9599 29.5294ZM22.0251 28.4239C21.6261 28.5892 21.3746 28.3554 21.6414 28.5149C21.9102 28.6756 22.2852 28.9773 22.9599 29.5294L24.8597 27.2075C24.2638 26.72 23.6859 26.242 23.1811 25.9402C22.6744 25.6372 21.8289 25.258 20.8771 25.6523L22.0251 28.4239ZM22.1458 29.8666C22.2326 28.9991 22.2844 28.5206 22.3608 28.217C22.4367 27.9155 22.4242 28.2586 22.0251 28.4239L20.8771 25.6523C19.9252 26.0465 19.5955 26.9125 19.4515 27.4851C19.308 28.0554 19.2373 28.802 19.1607 29.5681L22.1458 29.8666ZM22.0893 30.4316L22.1458 29.8666L19.1607 29.5681L19.1042 30.1331L22.0893 30.4316ZM22.0968 30.2824V30.2823H19.0968V30.2824H22.0968ZM21.1892 32.937C21.6464 32.5232 21.8323 32.0204 21.926 31.6164C22.01 31.2541 22.0505 30.8197 22.0893 30.4316L19.1042 30.1331C19.0823 30.3524 19.0654 30.5199 19.0476 30.6625C19.0298 30.8057 19.0151 30.889 19.0035 30.9388C18.9923 30.9872 18.9919 30.9682 19.0178 30.9171C19.0487 30.8562 19.101 30.7807 19.1762 30.7126L21.1892 32.937ZM18.6067 33.5833C18.9967 33.5833 19.433 33.5863 19.8019 33.5387C20.2132 33.4857 20.7319 33.3508 21.1892 32.937L19.1762 30.7126C19.2514 30.6445 19.3318 30.6 19.3954 30.5754C19.4488 30.5547 19.4677 30.557 19.4184 30.5633C19.3677 30.5699 19.2833 30.5762 19.1391 30.5797C18.9954 30.5832 18.8271 30.5833 18.6067 30.5833V33.5833ZM16.3933 33.5833H18.6067V30.5833H16.3933V33.5833ZM13.8108 32.937C14.268 33.3508 14.7868 33.4857 15.1981 33.5387C15.567 33.5863 16.0033 33.5833 16.3933 33.5833V30.5833C16.1729 30.5833 16.0046 30.5832 15.8609 30.5797C15.7167 30.5762 15.6323 30.5699 15.5816 30.5633C15.5322 30.557 15.5512 30.5547 15.6045 30.5754C15.6682 30.6 15.7486 30.6445 15.8238 30.7126L13.8108 32.937ZM12.9107 30.4316C12.9495 30.8197 12.99 31.2541 13.074 31.6164C13.1677 32.0204 13.3535 32.5232 13.8108 32.937L15.8238 30.7126C15.899 30.7807 15.9513 30.8562 15.9822 30.9171C16.008 30.9682 16.0077 30.9872 15.9965 30.9388C15.9849 30.889 15.9702 30.8057 15.9523 30.6625C15.9345 30.5198 15.9177 30.3524 15.8958 30.1331L12.9107 30.4316ZM12.8542 29.8672L12.9107 30.4316L15.8958 30.1331L15.8393 29.5687L12.8542 29.8672ZM12.9749 28.4245C12.5759 28.2592 12.5634 27.916 12.6392 28.2175C12.7156 28.5212 12.7675 28.9997 12.8542 29.8672L15.8393 29.5687C15.7627 28.8026 15.6921 28.056 15.5486 27.4856C15.4045 26.9131 15.0748 26.0471 14.123 25.6528L12.9749 28.4245ZM12.0401 29.53C12.7148 28.9779 13.0899 28.6762 13.3586 28.5155C13.6254 28.3559 13.3739 28.5897 12.9749 28.4245L14.123 25.6528C13.1711 25.2586 12.3256 25.6378 11.8189 25.9407C11.3141 26.2426 10.7362 26.7206 10.1404 27.2081L12.0401 29.53ZM11.601 29.8892L12.0401 29.53L10.1404 27.2081L9.70134 27.5673L11.601 29.8892ZM9.193 31.0242C9.80893 31.055 10.2959 30.8309 10.6478 30.6115C10.9634 30.4147 11.2992 30.1361 11.6011 29.8892L9.70133 27.5673C9.53075 27.7069 9.40044 27.8134 9.28699 27.9017C9.17315 27.9903 9.10379 28.0388 9.06044 28.0658C9.01822 28.0921 9.03144 28.0784 9.08584 28.0606C9.15071 28.0394 9.24113 28.0229 9.34244 28.028L9.193 31.0242ZM6.90985 29.6552C7.18562 29.931 7.49209 30.2416 7.78651 30.4688C8.11484 30.7221 8.57707 30.9935 9.19299 31.0242L9.34245 28.028C9.44376 28.033 9.53209 28.0584 9.59452 28.086C9.64688 28.1091 9.65867 28.1241 9.61928 28.0937C9.57883 28.0625 9.51465 28.0073 9.41019 27.9078C9.30608 27.8087 9.18702 27.6897 9.03117 27.5339L6.90985 29.6552ZM5.34475 28.0901L6.90984 29.6552L9.03117 27.5339L7.46607 25.9688L5.34475 28.0901ZM3.9757 25.8069C4.00641 26.4229 4.27783 26.8851 4.53119 27.2134C4.75839 27.5079 5.06898 27.8143 5.34475 28.0901L7.46607 25.9688C7.31021 25.8129 7.19128 25.6939 7.09213 25.5898C6.99264 25.4853 6.93747 25.4211 6.90626 25.3807C6.87586 25.3413 6.89082 25.3531 6.91396 25.4054C6.94155 25.4679 6.96692 25.5562 6.97197 25.6575L3.9757 25.8069ZM5.11077 23.3989C4.86381 23.7007 4.58525 24.0366 4.38848 24.3522C4.16905 24.7041 3.94498 25.191 3.9757 25.8069L6.97197 25.6575C6.97702 25.7588 6.96057 25.8492 6.93933 25.9141C6.92151 25.9685 6.90781 25.9817 6.93413 25.9395C6.96116 25.8962 7.00967 25.8268 7.09827 25.713C7.18658 25.5995 7.29307 25.4692 7.43264 25.2986L5.11077 23.3989ZM5.46995 22.9599L5.11077 23.3989L7.43264 25.2986L7.79182 24.8596L5.46995 22.9599ZM6.57545 22.0251C6.41016 21.626 6.64396 21.3746 6.4844 21.6414C6.32372 21.9101 6.02201 22.2852 5.46995 22.9599L7.79182 24.8596C8.27934 24.2638 8.75731 23.6859 9.05917 23.1811C9.36215 22.6744 9.74135 21.8289 9.34708 20.877L6.57545 22.0251ZM5.13272 22.1458C6.0002 22.2325 6.47875 22.2844 6.78237 22.3608C7.08387 22.4366 6.74073 22.4241 6.57545 22.0251L9.34708 20.877C8.95282 19.9252 8.0868 19.5954 7.51429 19.4514C6.9439 19.3079 6.19729 19.2373 5.43123 19.1606L5.13272 22.1458ZM4.56839 22.0893L5.13272 22.1458L5.43123 19.1606L4.8669 19.1042L4.56839 22.0893ZM4.71763 22.0968H4.71765V19.0968H4.71763V22.0968ZM2.06302 21.1892C2.47683 21.6464 2.97958 21.8323 3.38358 21.926C3.74586 22.01 4.18031 22.0505 4.56837 22.0893L4.86689 19.1042C4.64757 19.0823 4.48014 19.0654 4.33747 19.0477C4.19433 19.0298 4.11099 19.0151 4.06122 19.0035C4.01275 18.9923 4.03179 18.9919 4.08286 19.0178C4.14375 19.0487 4.21932 19.101 4.28738 19.1762L2.06302 21.1892ZM1.41666 18.6067C1.41666 18.9967 1.41374 19.433 1.46128 19.8019C1.51429 20.2132 1.64922 20.7319 2.06302 21.1892L4.28738 19.1762C4.35545 19.2514 4.39997 19.3318 4.42461 19.3955C4.44527 19.4488 4.44303 19.4677 4.43667 19.4184C4.43014 19.3677 4.42377 19.2833 4.42025 19.1391C4.41675 18.9954 4.41666 18.8271 4.41666 18.6067H1.41666ZM1.41666 16.3933V18.6067H4.41666V16.3933H1.41666ZM2.06302 13.8108C1.64922 14.2681 1.51429 14.7868 1.46128 15.1981C1.41374 15.567 1.41666 16.0033 1.41666 16.3933H4.41666C4.41666 16.1729 4.41675 16.0046 4.42025 15.8609C4.42377 15.7167 4.43014 15.6323 4.43667 15.5816C4.44303 15.5323 4.44527 15.5512 4.42461 15.6046C4.39997 15.6682 4.35545 15.7486 4.28738 15.8238L2.06302 13.8108ZM4.56839 12.9107C4.18033 12.9495 3.74588 12.99 3.38359 13.074C2.97959 13.1677 2.47683 13.3536 2.06303 13.8108L4.28738 15.8238C4.21932 15.899 4.14375 15.9513 4.08285 15.9822C4.03179 16.0081 4.01275 16.0077 4.06122 15.9965C4.11099 15.9849 4.19434 15.9702 4.33748 15.9523C4.48015 15.9346 4.64759 15.9177 4.8669 15.8958L4.56839 12.9107ZM5.13327 12.8542L4.56839 12.9107L4.8669 15.8958L5.43178 15.8393L5.13327 12.8542ZM6.57599 12.9749C6.74128 12.5758 7.08442 12.5634 6.78292 12.6392C6.4793 12.7156 6.00075 12.7674 5.13327 12.8542L5.43178 15.8393C6.19784 15.7627 6.94445 15.692 7.51484 15.5485C8.08735 15.4045 8.95336 15.0748 9.34763 14.1229L6.57599 12.9749ZM5.4705 12.0401C6.02255 12.7148 6.32427 13.0899 6.48495 13.3586C6.64451 13.6254 6.41071 13.3739 6.57599 12.9749L9.34763 14.1229C9.7419 13.1711 9.3627 12.3256 9.05972 11.8189C8.75785 11.3141 8.27989 10.7362 7.79237 10.1403L5.4705 12.0401ZM5.11084 11.6005L5.4705 12.0401L7.79237 10.1403L7.43271 9.70076L5.11084 11.6005ZM3.97576 9.19242C3.94504 9.80835 4.16911 10.2953 4.38854 10.6472C4.58532 10.9628 4.86388 11.2986 5.11084 11.6005L7.43271 9.70076C7.29313 9.53017 7.18664 9.39987 7.09834 9.28641C7.00974 9.17257 6.96123 9.10321 6.9342 9.05986C6.90787 9.01764 6.92158 9.03086 6.93939 9.08526C6.96064 9.15013 6.97709 9.24056 6.97204 9.34186L3.97576 9.19242ZM5.34481 6.90927C5.06904 7.18504 4.75845 7.49151 4.53125 7.78594C4.27789 8.11426 4.00648 8.5765 3.97576 9.19242L6.97204 9.34186C6.96699 9.44317 6.94161 9.53151 6.91402 9.59394C6.89088 9.6463 6.87593 9.65809 6.90633 9.6187C6.93754 9.57826 6.99271 9.51407 7.0922 9.40961C7.19135 9.3055 7.31028 9.18644 7.46614 9.03059L5.34481 6.90927ZM6.90991 5.34417L5.34481 6.90927L7.46614 9.03059L9.03123 7.46549L6.90991 5.34417ZM9.19307 3.97512C8.57714 4.00584 8.11491 4.27725 7.78658 4.53061C7.49215 4.75781 7.18568 5.0684 6.90991 5.34417L9.03123 7.46549C9.18709 7.30963 9.30615 7.1907 9.41025 7.09155C9.51471 6.99206 9.5789 6.93689 9.61934 6.90568C9.65874 6.87528 9.64695 6.89024 9.59459 6.91338C9.53215 6.94097 9.44382 6.96634 9.34251 6.97139L9.19307 3.97512ZM11.6011 5.11019C11.2993 4.86323 10.9634 4.58467 10.6478 4.3879C10.2959 4.16847 9.809 3.9444 9.19307 3.97512L9.34251 6.97139C9.2412 6.97644 9.15078 6.95999 9.08591 6.93875C9.03151 6.92093 9.01829 6.90723 9.06051 6.93355C9.10386 6.96058 9.17322 7.0091 9.28706 7.0977C9.40051 7.186 9.53082 7.29249 9.70141 7.43206L11.6011 5.11019ZM12.0402 5.4694L11.6011 5.11019L9.70141 7.43206L10.1404 7.79127L12.0402 5.4694ZM12.975 6.5749C13.374 6.40961 13.6255 6.64342 13.3587 6.48386C13.0899 6.32317 12.7149 6.02146 12.0402 5.4694L10.1404 7.79127C10.7363 8.27879 11.3142 8.75676 11.819 9.05862C12.3257 9.3616 13.1712 9.74081 14.123 9.34654L12.975 6.5749ZM12.8543 5.13218C12.7675 5.99965 12.7157 6.4782 12.6393 6.78182C12.5634 7.08332 12.5759 6.74019 12.975 6.5749L14.123 9.34654C15.0749 8.95227 15.4046 8.08626 15.5486 7.51374C15.6921 6.94335 15.7628 6.19675 15.8394 5.43069L12.8543 5.13218ZM12.9107 4.56841L12.8543 5.13217L15.8394 5.43069L15.8958 4.86692L12.9107 4.56841ZM13.8108 2.06304C13.3535 2.47685 13.1677 2.97961 13.074 3.38361C12.99 3.74589 12.9495 4.18035 12.9107 4.56841L15.8958 4.86692C15.9177 4.6476 15.9345 4.48016 15.9523 4.3375C15.9702 4.19435 15.9849 4.111 15.9965 4.06124C16.0077 4.01277 16.008 4.03181 15.9822 4.08287C15.9513 4.14376 15.899 4.21933 15.8238 4.2874L13.8108 2.06304ZM16.3933 1.41667C16.0033 1.41667 15.567 1.41376 15.1981 1.46129C14.7868 1.51431 14.268 1.64924 13.8108 2.06304L15.8238 4.2874C15.7486 4.35546 15.6682 4.39998 15.6045 4.42462C15.5512 4.44529 15.5322 4.44305 15.5816 4.43669C15.6323 4.43016 15.7167 4.42378 15.8609 4.42027C16.0046 4.41676 16.1729 4.41667 16.3933 4.41667V1.41667ZM18.6067 1.41667H16.3933V4.41667H18.6067V1.41667ZM21.1892 2.06304C20.7319 1.64924 20.2132 1.51431 19.8019 1.46129C19.433 1.41376 18.9967 1.41667 18.6067 1.41667V4.41667C18.8271 4.41667 18.9954 4.41676 19.1391 4.42027C19.2833 4.42378 19.3677 4.43016 19.4184 4.43669C19.4677 4.44305 19.4488 4.44529 19.3954 4.42462C19.3318 4.39998 19.2514 4.35546 19.1762 4.2874L21.1892 2.06304ZM22.0893 4.56839C22.0505 4.18033 22.01 3.74588 21.926 3.3836C21.8323 2.9796 21.6464 2.47684 21.1892 2.06304L19.1762 4.2874C19.101 4.21934 19.0487 4.14376 19.0178 4.08287C18.9919 4.03181 18.9923 4.01277 19.0035 4.06124C19.0151 4.111 19.0298 4.19435 19.0476 4.33749C19.0654 4.48015 19.0823 4.64759 19.1042 4.8669L22.0893 4.56839ZM21.8333 17.5C21.8333 19.8932 19.8932 21.8333 17.5 21.8333V24.8333C21.5501 24.8333 24.8333 21.5501 24.8333 17.5H21.8333ZM17.5 13.1667C19.8932 13.1667 21.8333 15.1068 21.8333 17.5H24.8333C24.8333 13.4499 21.5501 10.1667 17.5 10.1667V13.1667ZM13.1667 17.5C13.1667 15.1068 15.1068 13.1667 17.5 13.1667V10.1667C13.4499 10.1667 10.1667 13.4499 10.1667 17.5H13.1667ZM17.5 21.8333C15.1068 21.8333 13.1667 19.8932 13.1667 17.5H10.1667C10.1667 21.5501 13.4499 24.8333 17.5 24.8333V21.8333Z" 
                        fill="#33363F"
                    />
                </Svg>
            </TouchableOpacity>
            <Modal visible={isModalVisible} onRequestClose={()=>setIsModalVisible(false)} animationType='slide' presentationStyle='formSheet'>
                <Settings setIsModalVisible={setIsModalVisible}/>
            </Modal>
        </View>

    );
};

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: 'steelblue',
        width: '100%',
        height: '12%',
        borderBottomWidth: 3,
        borderColor: '#33363F',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        paddingBottom: 9,
    },
    iconButtons: {
        flexDirection: "row",
        borderWidth: 0,
    },
    icons: {
        borderWidth: 0,
    },
    scores:{
        fontSize: 20,
        paddingTop: 5,
        borderWidth: 0,
    },
});

export default TopNavBar;