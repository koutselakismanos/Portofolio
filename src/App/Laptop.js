import React from 'react';
import './Laptop.scss'

export default class Laptop extends React.Component
{
    render()
    {
        return (
            <div style={this.props.style} className={this.props.className}><svg width={814} height={625} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                {/* <div style={this.props.style} className={this.props.className}><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> */}
                <defs>
                    <path d="M163.956495 3.6489823L4.24453608 95.8168142c-.71570103.4107079-1.14015464 1.1486283-1.14015464 1.9700442 0 .8236726.42445361 1.5638496 1.14015464 1.9768142L262.26266 248.656593c6.387124 3.687345 14.325309 3.689602 20.712433 0l149.358-86.19c.713443-.410708 1.140154-1.148628 1.140154-1.974558 0-.821416-.426711-1.559336-1.140154-1.970044L163.956495 3.6489823zM272.618876 253.855885c-4.002958 0-8.005917-1.031283-11.575391-3.089336L3.02536082 101.873628c-1.4765567-.855265-2.3593299-2.3807519-2.35707216-4.0867696 0-1.7037611.88051546-3.2269911 2.35707216-4.08L163.956495.83721239l.611845.3520354L433.552268 156.412035c1.474299.853009 2.357072 2.376239 2.357072 4.08s-.882773 3.231505-2.357072 4.084514l-149.358 86.187743c-3.569474 2.06031-7.572433 3.091593-11.575392 3.091593z" id="path-1" />
                    <linearGradient x1="100%" y1="50%" x2="9.9e-7%" y2="50%" id="linearGradient-3">
                        <stop stopColor="#6EC3BF" offset="0%" />
                        <stop stopColor="#555B99" offset="100%" />
                    </linearGradient>
                    <path d="M298.680451 174.070769c0-.004513 0-.006769.002256-.011282-.002256.004513-.002256.006769-.002256.011282m.004511-.027077c0-.004513 0-.011282.002256-.018051-.002256.006769-.002256.013538-.002256.018051m.002256-.022564c.157895-1.058256-.101504-2.297025-.618045-3.477128l-4.718797 2.089436c-.690226-1.349333-1.725564-2.563282-2.905263-3.244718l-60.457895-34.917949v-5.185231l64.962406 37.51959c2.330075 1.344821 4.103008 4.779077 3.737594 7.216m-76.966917-44.324923l-67.574436-39.0268717v-5.1852307l67.574436 39.0268714v5.185231m-78.500752-45.3380512l-4.635338-2.6783589v-5.1829744l4.635338 2.6761026v5.1852307m-12.902256-7.452923l-18.004511-10.3975385v-5.1852308l18.004511 10.3997949v5.1829744m-26.271428-15.1721026L58.7120301 35.5497436v-5.1829744l45.3338349 26.1811282v5.1852308M41.1067669 25.382359l-4.6353383-2.6761026v-5.1852308l4.6353383 2.678359v5.1829744m-15.5616541-8.9872821l-4.6353384-2.6761025V8.53374359l4.6353384 2.67610261v5.1852307M12.6428571 8.94215385L3.43082707 3.62379487C2.7 3.20184615 2.00526316 2.99876923 1.38721805 2.99876923c-.3924812 0-.7556391.08123077-1.07593986.2414359L4.59699248.78297436l-.00676692.02482051c.37894737-.25046154.82781955-.38358974 1.32631579-.38358974.60902256 0 1.29473685.1985641 2.01654136.61374359l4.70977439 2.72123077v5.18297436" id="path-4" />
                    <linearGradient x1="99.9998322%" y1="113.203477%" x2="-11.1049617%" y2="113.203477%" id="linearGradient-6">
                        <stop stopColor="#BCB8D1" offset="0%" />
                        <stop stopColor="#E9E7EE" offset="100%" />
                    </linearGradient>
                    <path d="M.953 223.62592c.56925-.38872.96975-1.0622 1.12725-1.99106l36.108-215.17234c.20475-1.22266-.135-2.70522-.82125-4.05444L42.074.31532c.51525 1.18198.774 2.42272.6165 3.48266v.00452c-.00225.00678-.00225.01356-.00225.01808-.00225.00678-.00225.0113-.00225.01582-.00225.00452-.00225.00678-.00225.0113-.00225.00904-.0045.01808-.0045.02712l-36.108 215.17234c-.189 1.12096-.74025 1.8645-1.5075 2.18994l.0045.00226L.953 223.62592" id="path-7" />
                    <linearGradient x1="99.9979865%" y1="50.0161927%" x2="-35.9179628%" y2="50.0161927%" id="linearGradient-9">
                        <stop stopColor="#555B99" offset="0%" />
                        <stop stopColor="#B8B6D0" offset="100%" />
                    </linearGradient>
                    <path d="M.32538461 84.7590424l15.69076919 8.2045932L173.355433 2.00035593c2.632452-1.52054237 7.228509-1.33047457 10.269952.42765254L454.989375 159.313136c2.596298-1.452661 14.436683-7.154695 14.436683-7.154695l-5.743943 14.98594-.022596-.018101c-.237259.665237-.747932 1.287483-1.606586 1.783017l-165.708895 95.80322c-2.632451 1.522805-7.230769 1.330475-10.269951-.42539L8.38317308 103.740932c-1.24956731-.721805-2.01331731-1.595212-2.32966346-2.479932l-.02259616.013576L.32538462 84.7590424" id="path-10" />
                    <linearGradient x1="100%" y1="50.0002138%" x2="0%" y2="50.0002138%" id="linearGradient-12">
                        <stop stopColor="#555B99" offset="0%" />
                        <stop stopColor="#B8B6D0" offset="100%" />
                    </linearGradient>
                    <path d="M2.75221154 105.136083L287.34851 269.200058c3.116009 1.795934 7.827307 1.992223 10.525288.435446l169.830433-97.900959c2.695721-1.556776 2.359038-4.273239-.756971-6.069173L182.350962 1.60139669c-3.11601-1.79593388-7.827308-1.98996694-10.525289-.43544628L1.99524038 99.0691653c-2.69798077 1.5567767-2.35903846 4.2732397.75697116 6.0669177" id="path-13" />
                    <linearGradient x1="66.3965624%" y1="49.9998305%" x2="-33.6032158%" y2="49.9998305%" id="linearGradient-15">
                        <stop stopColor="#BCB8D1" offset="0%" />
                        <stop stopColor="#E9E7EE" offset="100%" />
                    </linearGradient>
                    <path d="M66.0887037 68.01775L2.33014815 31.35625c-2.49196296-1.43325-2.49196296-3.75525 0-5.1885L45.9293333 1.09825c2.491963-1.43325 6.5315186-1.43325 9.0257408 0l63.7585559 36.6615c2.491963 1.431 2.491963 3.75525 0 5.1885l-43.6014448 25.0695c-2.491963 1.43325-6.5315185 1.43325-9.0234815 0" id="path-16" />
                    <linearGradient x1="99.9995298%" y1="50%" x2="-.0004702%" y2="50%" id="linearGradient-18">
                        <stop stopColor="#BCB8D1" offset="0%" />
                        <stop stopColor="#E9E7EE" offset="100%" />
                    </linearGradient>
                    <path d="M.42862885 201.455977l59.22893635-34.170533v4.758l6.466087 3.730037v-6.673851l-4.8043479-2.772111 8.512174-4.91163v1.24937L93.6158261 176.388v-6.676111l-19.0817391-11.00937 7.4292173-4.285815 4.0153044 2.318v-4.633741l9.1994783-5.307 8.186609 4.721852v-6.673852l-2.403305-1.387185 21.299652-12.288111v.756852l17.442609 10.06274v-6.673852l-12.312695-7.10537 7.429217-4.285815 4.883478 2.817297v-5.634593l21.772174-12.561482 26.689565 15.399112v-6.673852l-19.11113-11.027445c1.822261.110704 3.676174.605482 5.163826 1.464L307.541565 184.623l-1.740869 10.259296 5.830782-34.354296L34.3290435.54307407.42862885 201.455977l-.29975928 1.776542L277.243652 363.111259M202.528696 186.54563l7.442782 4.292592v6.673852l-7.442782-4.292593m-28.141044-22.911148l23.494957 13.555556v6.673852l-23.494957-13.553297m32.269391-3.307555l10.949392 6.319148v6.676111L206.657043 180.353m-48.90713-34.892l44.258783 25.536407v6.673852l-44.258783-25.534148m0 8.57163l11.991652 6.920111v6.673852l-11.991652-6.917852m78.811652-22.197222l21.089392 12.16837v6.673852l-21.089392-12.166111m-21.132348-3.619334L222.872 152.537v6.676111l-7.442783-4.294852M127.712 143.642296v6.673852l11.991652 6.917852v-6.673852m43.429044-5.70237l7.442782 4.294852v6.673851l-7.442782-4.292592m20.793217-9.927185l7.442783 4.294852v6.673851l-7.442783-4.292592m-29.538261-8.469963l4.098957 2.365444v6.673852l-4.098957-2.363185m4.582783-19.280519l20.309391 11.718778v6.673852l-20.309391-11.716518m-21.220522-3.671297l11.991652 6.920111v6.673852l-11.991652-6.917852m50.661565-7.941296l7.440522 4.292593v6.673852l-7.440522-4.292593m-15.597739-15.674741l10.949391 6.319148v6.673852l-10.949391-6.316889m-35.063826-11.657777l16.572174 9.563444v6.673852l-16.572174-9.561185" id="path-19" />
                    <linearGradient x1="97.4684279%" y1="66.509431%" x2="-53.2878502%" y2="66.509431%" id="linearGradient-21">
                        <stop stopColor="#3A337A" offset="0%" />
                        <stop stopColor="#3F367B" offset="100%" />
                    </linearGradient>
                    <path d="M305.067339 199.198219l.40327-2.375219-36.492696-21.051778c-1.245739-.720703-2.880348-1.079926-4.514956-1.079926-1.634609 0-3.266957.359223-4.514957 1.079926l-2.297043 1.323926v2.182445l-1.890087-1.091223-7.431479 4.288074 9.321566 5.377037v6.673852l-11.991653-6.917852v-3.592222l-29.341565 16.92863c-.770956.442815-1.272869.976-1.569043 1.538555-.644348-1.233555-.176348-2.618481 1.465043-3.610296-2.389739 1.443667-2.355826 3.730037.104 5.148852l63.804 36.81237c1.245739.718445 2.880348 1.077667 4.514957 1.077667 1.634608 0 3.269217-.359222 4.514956-1.077667l9.807652-5.659444 6.108035-35.975707-27.823687 163.91304L.12886957 203.232519 34.3290435.54307407 311.631478 160.528l-6.564139 38.670219m-59.408035 12.230892l11.991653 6.917852v6.673852l-11.991653-6.917852m-5.450956-25.066482l17.442609 10.062741v6.673852l-17.442609-10.062741m-23.987826-.842703c.004521-.00226.009043-.004519.015826-.009037m.020348-.011297c.002261-.002259.004521-.004518.006782-.004518m.020348-.011297c.002261-.002259.004522-.004518.006783-.004518" id="path-22" />
                    <linearGradient x1="107.390768%" y1="57.0079947%" x2="68.80135%" y2="57.0079947%" id="linearGradient-24">
                        <stop stopColor="#3A337A" offset="0%" />
                        <stop stopColor="#3F367B" offset="100%" />
                    </linearGradient>
                    <path id="path-25" d="M34.3290435.54307407L311.631478 160.528l-34.387826 202.583259L.12886956 203.232519 34.3290435.54307407" />
                    <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-27">
                        <stop stopColor="#BEBAD2" offset="0%" />
                        <stop stopColor="#E4E2EB" offset="100%" />
                    </linearGradient>
                    <path id="path-28" d="M30.8648 24.9155L.37133333 7.43975V.791L30.8648 18.26675v6.64875" />
                    <radialGradient cx="-3581.08749%" cy="-169.051483%" fx="-3581.08749%" fy="-169.051483%" r="8498.49904%" gradientTransform="matrix(.79114 0 0 1 -7.47956679 0)" id="radialGradient-30">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-31" d="M10.9054 13.8594286L.2486 7.46857143V.71428571l10.6568 6.39085715v6.75428574" />
                    <radialGradient cx="-10265.7246%" cy="-470.869414%" fx="-10265.7246%" fy="-470.869414%" r="18672.7704%" gradientTransform="matrix(1 0 0 .8107 0 -.89134636)" id="radialGradient-33">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-34" d="M7.434 12.0386667L.027 7.60533333v-6.895l7.407 4.43333334v6.89500003" />
                    <radialGradient cx="-15315.0273%" cy="-639.808445%" fx="-15315.0273%" fy="-639.808445%" r="27475.9721%" gradientTransform="matrix(1 0 0 .65385 0 -2.21471597)" id="radialGradient-36">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-37" d="M16.85375 16.397L.36125 6.875V.22625l16.4925 9.522V16.397" />
                    <radialGradient cx="-6572.4925%" cy="-346.10686%" fx="-6572.4925%" fy="-346.10686%" r="12585.3485%" gradientTransform="matrix(.9805 0 0 1 -1.28222756 0)" id="radialGradient-39">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-40" d="M20.9379 18.9415L.277 7.0114V.2172L20.9379 12.145v6.7965" />
                    <radialGradient cx="-5467.53534%" cy="-372.112763%" fx="-5467.53534%" fy="-372.112763%" r="11110.5392%" gradientTransform="matrix(.90627 0 0 1 -5.12488486 0)" id="radialGradient-42">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-43" d="M7.47 12.1146667L.06525 7.679V.78633333L7.47 5.21966667v6.89500003" />
                    <radialGradient cx="-15259.4257%" cy="-755.235839%" fx="-15259.4257%" fy="-755.235839%" r="27484.3209%" gradientTransform="matrix(1 0 0 .65365 0 -2.61576675)" id="radialGradient-45">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-46" d="M7.668 11.9676667L.26325 7.53433333V.64166667L7.668 5.075v6.8926667" />
                    <radialGradient cx="-15414.0292%" cy="-815.91883%" fx="-15414.0292%" fy="-815.91883%" r="27484.3209%" gradientTransform="matrix(1 0 0 .65378 0 -2.8248496)" id="radialGradient-48">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-49" d="M8.0706 12.139L.8304 7.70566667v-6.895L8.0706 5.244v6.895" />
                    <radialGradient cx="-14979.9666%" cy="-784.875386%" fx="-14979.9666%" fy="-784.875386%" r="27484.3209%" gradientTransform="matrix(1 0 0 .63912 0 -2.8324348)" id="radialGradient-51">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-52" d="M44.167 32.4133333L.35404762 6.7932V.09746667L44.167 25.7153333v6.698" />
                    <radialGradient cx="-2460.99152%" cy="-269.149891%" fx="-2460.99152%" fy="-269.149891%" r="6264.34472%" gradientTransform="matrix(.73759 0 0 1 -6.45796162 0)" id="radialGradient-54">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-55" d="M11.8533333 13.3611429L.55066667 6.97028571V.216L11.8533333 6.60914286v6.75200004" />
                    <radialGradient cx="-10392.1284%" cy="-884.397496%" fx="-10392.1284%" fy="-884.397496%" r="18672.7704%" gradientTransform="matrix(1 0 0 .85984 0 -1.23960691)" id="radialGradient-57">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-58" d="M12.7853333 14.5634286L.41166667 7.56457143V.81028571L12.7853333 7.80914286v6.75428574" />
                    <radialGradient cx="-9084.73883%" cy="-749.903606%" fx="-9084.73883%" fy="-749.903606%" r="17056.5529%" gradientTransform="matrix(1 0 0 .8997 0 -.7521758)" id="radialGradient-60">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-61" d="M23.551 19.9888889L.169 6.65555556V.09111111L23.551 13.4244444v6.5644445" />
                    <radialGradient cx="-4706.72344%" cy="-551.381505%" fx="-4706.72344%" fy="-551.381505%" r="10228.0027%" gradientTransform="matrix(.85099 0 0 1 -7.01362974 0)" id="radialGradient-63">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-64" d="M8.3295 11.858L.92475 7.42466667v-6.895L8.3295 4.96533333V11.858" />
                    <radialGradient cx="-15240.6472%" cy="-1164.91658%" fx="-15240.6472%" fy="-1164.91658%" r="27484.3209%" gradientTransform="matrix(1 0 0 .65365 0 -4.0347003)" id="radialGradient-66">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-67" d="M24.776 21.4503L.36125 7.0385V.2443L24.776 14.6538v6.7965" />
                    <radialGradient cx="-4439.80923%" cy="-562.588937%" fx="-4439.80923%" fy="-562.588937%" r="9597.02561%" gradientTransform="matrix(.86857 0 0 1 -5.83510804 0)" id="radialGradient-69">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-70" d="M13.3443333 14.376L.96833333 7.37714286v-6.752L13.3443333 7.624v6.752" />
                    <radialGradient cx="-9513.07881%" cy="-1081.12866%" fx="-9513.07881%" fy="-1081.12866%" r="17053.3371%" gradientTransform="matrix(1 0 0 .90002 0 -1.0809449)" id="radialGradient-72">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-73" d="M8.394 6.49133333L.331 1.554V.67666667L8.394 5.614v.87733333" />
                    <radialGradient cx="-13144.985%" cy="-2352.31541%" fx="-13144.985%" fy="-2352.31541%" r="34222.4226%" gradientTransform="matrix(.72115 0 0 1 -36.65426487 0)" id="radialGradient-75">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-76" d="M8.394 10.8533333L.331 5.91366667V.554l8.063 4.93733333v5.36199997" />
                    <linearGradient x1="3460.68213%" y1="1940.1903%" x2="-550.040928%" y2="1940.1903%" id="linearGradient-78">
                        <stop stopColor="#84CDDB" offset="0%" />
                        <stop stopColor="#9CD4D6" offset="100%" />
                    </linearGradient>
                    <path id="path-79" d="M12.061 7.47125L.75833333 1.178V.33425L12.061 6.62525v.846" />
                    <radialGradient cx="-10063.6602%" cy="-1952.16583%" fx="-10063.6602%" fy="-1952.16583%" r="29571.5427%" gradientTransform="matrix(.63144 0 0 1 -37.09022349 0)" id="radialGradient-81">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-82" d="M12.061 11.8582857L.75833333 5.46514286V.21257143L12.061 6.60571429v5.25257141" />
                    <linearGradient x1="2500.28902%" y1="1616.05496%" x2="-534.248555%" y2="1616.05496%" id="linearGradient-84">
                        <stop stopColor="#84CDDB" offset="0%" />
                        <stop stopColor="#9CD4D6" offset="100%" />
                    </linearGradient>
                    <path id="path-85" d="M17.8422222 11.7353333L.49777778 1.22133333V.344L17.8422222 10.858v.8773333" />
                    <radialGradient cx="-6334.17937%" cy="-1349.97337%" fx="-6334.17937%" fy="-1349.97337%" r="17645.1688%" gradientTransform="matrix(.65677 0 0 1 -21.74074061 0)" id="radialGradient-87">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-88" d="M17.8422222 15.44875L.49777778 5.31025V.142L17.8422222 10.2805v5.16825" />
                    <linearGradient x1="1463.35682%" y1="1151.75658%" x2="-419.961563%" y2="1151.75658%" id="linearGradient-90">
                        <stop stopColor="#84CDDB" offset="0%" />
                        <stop stopColor="#9CD4D6" offset="100%" />
                    </linearGradient>
                    <path id="path-91" d="M16.532 16.8022222L.03725 7.39777778V.83111111L16.532 10.2377778v6.5644444" />
                    <radialGradient cx="-7074.33774%" cy="-642.183108%" fx="-7074.33774%" fy="-642.183108%" r="12742.6654%" gradientTransform="matrix(.96825 0 0 1 -2.24581925 0)" id="radialGradient-93">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-94" d="M12.5146667 14.4514286L.13866667 7.45257143V.69828571L12.5146667 7.69714286v6.75428574" />
                    <radialGradient cx="-9816.11425%" cy="-898.665448%" fx="-9816.11425%" fy="-898.665448%" r="17053.3371%" gradientTransform="matrix(1 0 0 .89987 0 -.89986062)" id="radialGradient-96">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-97" d="M17.532 16.89525L.17325 6.87375V.225L17.532 10.24875v6.6465" />
                    <radialGradient cx="-6717.24822%" cy="-802.128492%" fx="-6717.24822%" fy="-802.128492%" r="12208.2467%" gradientTransform="matrix(.96034 0 0 1 -2.66426215 0)" id="radialGradient-99">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-100" d="M12.5146667 14.304L.13866667 7.30514286V.55085714L12.5146667 7.552v6.752" />
                    <radialGradient cx="-9816.11425%" cy="-1122.99651%" fx="-9816.11425%" fy="-1122.99651%" r="17053.3371%" gradientTransform="matrix(1 0 0 .89987 0 -1.12449009)" id="radialGradient-102">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-103" d="M15.5245714 15.76575L.14857143 7.02675V.38025L15.5245714 9.117v6.64875" />
                    <radialGradient cx="-7718.50305%" cy="-1074.85668%" fx="-7718.50305%" fy="-1074.85668%" r="13445.9492%" gradientTransform="matrix(1 0 0 .99938 0 -.00663187)" id="radialGradient-105">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-106" d="M8.532 6.14825l-8.24625-4.761v-.846l8.24625 4.761v.846" />
                    <radialGradient cx="-14250.633%" cy="-3291.11958%" fx="-14250.633%" fy="-3291.11958%" r="36296.5088%" gradientTransform="matrix(.67995 0 0 1 -45.60986345 0)" id="radialGradient-108">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-109" d="M8.532 9.845L.28575 5.1898V.1342L8.532 4.7894V9.845" />
                    <linearGradient x1="2355.03411%" y1="1410.17218%" x2="-1655.68895%" y2="1410.17218%" id="linearGradient-111">
                        <stop stopColor="#84CDDB" offset="0%" />
                        <stop stopColor="#9CD4D6" offset="100%" />
                    </linearGradient>
                    <path id="path-112" d="M31.2478667 24.9245L.7544 7.44875V.8l30.4934667 17.478v6.6465" />
                    <radialGradient cx="-3968.8746%" cy="-448.887334%" fx="-3968.8746%" fy="-448.887334%" r="8498.49904%" gradientTransform="matrix(.79114 0 0 1 -8.28951056 0)" id="radialGradient-114">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-115" d="M11.9606667 13.8685714L.66033333 7.47771429V.72342857L11.9606667 7.11657143v6.75199997" />
                    <radialGradient cx="-11345.0692%" cy="-992.587376%" fx="-11345.0692%" fy="-992.587376%" r="18676.6261%" gradientTransform="matrix(1 0 0 .85966 0 -1.393017)" id="radialGradient-117">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-118" d="M17.0088889 16.406L.72 6.884V.23525L17.0088889 9.7595v6.6465" />
                    <radialGradient cx="-7284.21146%" cy="-763.582858%" fx="-7284.21146%" fy="-763.582858%" r="12429.9739%" gradientTransform="matrix(.99275 0 0 1 -.52832386 0)" id="radialGradient-120">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-121" d="M21.0289 18.9507L.368 7.0229V.2264l20.6609 11.9301v6.7942" />
                    <radialGradient cx="-6048.29901%" cy="-740.666994%" fx="-6048.29901%" fy="-740.666994%" r="11110.5392%" gradientTransform="matrix(.90627 0 0 1 -5.6692521 0)" id="radialGradient-123">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-124" d="M8.0505 11.9793333L.6435 7.54366667V.651l7.407 4.43333333v6.89499997" />
                    <radialGradient cx="-16994.0674%" cy="-1433.75283%" fx="-16994.0674%" fy="-1433.75283%" r="27475.9721%" gradientTransform="matrix(1 0 0 .65385 0 -4.96297833)" id="radialGradient-126">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-127" d="M12.8925714 14.4342857L.76914286 7.43542857V.68114286L12.8925714 7.68v6.7542857" />
                    <radialGradient cx="-10066.6044%" cy="-1024.22636%" fx="-10066.6044%" fy="-1024.22636%" r="17053.3371%" gradientTransform="matrix(1 0 0 .8815 0 -1.2136878)" id="radialGradient-129">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-130" d="M4.865 9.0056L.3325 6.7044V.2034L4.865 2.5068v6.4988" />
                    <radialGradient cx="-29856.1335%" cy="-1646.50587%" fx="-29856.1335%" fy="-1646.50587%" r="49890.182%" gradientTransform="matrix(1 0 0 .51493 0 -7.9867391)" id="radialGradient-132">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-133" d="M7.40925 12.1483333L.00225 7.715V.82l7.407 4.43566667v6.89266663" />
                    <radialGradient cx="-16560.1367%" cy="-1402.87745%" fx="-16560.1367%" fy="-1402.87745%" r="27475.9721%" gradientTransform="matrix(1 0 0 .65385 0 -4.8561022)" id="radialGradient-135">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-136" d="M44.5452381 32.4224L.73228571 6.80453333v-6.698L44.5452381 25.7266667V32.4224" />
                    <radialGradient cx="-2727.48621%" cy="-479.600898%" fx="-2727.48621%" fy="-479.600898%" r="6264.34472%" gradientTransform="matrix(.73759 0 0 1 -7.15727836 0)" id="radialGradient-138">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-139" d="M12.2476667 13.3702857L.94733333 6.97942857V.22514286L12.2476667 6.61828571v6.75199999" />
                    <radialGradient cx="-11471.4991%" cy="-1406.11546%" fx="-11471.4991%" fy="-1406.11546%" r="18676.6261%" gradientTransform="matrix(1 0 0 .85966 0 -1.97337062)" id="radialGradient-141">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-142" d="M12.8925714 14.5725714L.76914286 7.57371429V.81942857L12.8925714 7.81828571v6.75428569" />
                    <radialGradient cx="-10066.6044%" cy="-1248.55742%" fx="-10066.6044%" fy="-1248.55742%" r="17053.3371%" gradientTransform="matrix(1 0 0 .8815 0 -1.47951555)" id="radialGradient-144">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-145" d="M23.9204545 19.9977778L.30227273 6.66444444V.1L23.9204545 13.4333333v6.5644445" />
                    <radialGradient cx="-5208.7346%" cy="-886.471968%" fx="-5208.7346%" fy="-886.471968%" r="10331.3159%" gradientTransform="matrix(.84248 0 0 1 -8.204955 0)" id="radialGradient-147">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-148" d="M7.712 11.8673333L.305 7.434V.539l7.407 4.43566667v6.89266663" />
                    <radialGradient cx="-16820.7382%" cy="-1782.91864%" fx="-16820.7382%" fy="-1782.91864%" r="27475.9721%" gradientTransform="matrix(1 0 0 .65385 0 -6.17162622)" id="radialGradient-150">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-151" d="M17.9533333 16.8511111L.51333333 6.78222222V.21555556L17.9533333 10.2844444v6.5666667" />
                    <radialGradient cx="-6967.88609%" cy="-1193.25007%" fx="-6967.88609%" fy="-1193.25007%" r="12082.6743%" gradientTransform="matrix(.95387 0 0 1 -3.21400714 0)" id="radialGradient-153">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-154" d="M12.7386667 14.3851429L.36266667 7.38628571v-6.752L12.7386667 7.63314286v6.75200004" />
                    <radialGradient cx="-10496.6572%" cy="-1579.86536%" fx="-10496.6572%" fy="-1579.86536%" r="17053.3371%" gradientTransform="matrix(1 0 0 .90002 0 -1.57959682)" id="radialGradient-156">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-157" d="M8.7658 6.77133333L.7028 1.834V.686l8.063 4.93733333v1.148" />
                    <radialGradient cx="-14568.4229%" cy="-3398.14801%" fx="-14568.4229%" fy="-3398.14801%" r="32700.2596%" gradientTransform="matrix(.75472 0 0 1 -35.73299064 0)" id="radialGradient-159">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-160" d="M8.7658 11.131L.7028 6.19366667V.834l8.063 4.93733333V11.131" />
                    <linearGradient x1="2037.2442%" y1="1258.10107%" x2="-1973.47885%" y2="1258.10107%" id="linearGradient-162">
                        <stop stopColor="#84CDDB" offset="0%" />
                        <stop stopColor="#9CD4D6" offset="100%" />
                    </linearGradient>
                    <path id="path-163" d="M11.4553333 7.74125L.15266667 1.448V.34325l11.30266663 6.291v1.107" />
                    <radialGradient cx="-11140.642%" cy="-2795.82421%" fx="-11140.642%" fy="-2795.82421%" r="28528.2644%" gradientTransform="matrix(.65454 0 0 1 -38.48690748 0)" id="radialGradient-165">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-166" d="M11.4553333 12.0936667L.15266667 5.56733333v-5.362L11.4553333 6.73166667v5.36200003" />
                    <linearGradient x1="1423.30718%" y1="1024.88714%" x2="-1611.23039%" y2="1024.88714%" id="linearGradient-168">
                        <stop stopColor="#84CDDB" offset="0%" />
                        <stop stopColor="#9CD4D6" offset="100%" />
                    </linearGradient>
                    <path id="path-169" d="M16.91225 16.8111111L.41975 7.40666667V.84222222l16.4925 9.40444448v6.5644444" />
                    <radialGradient cx="-7787.03547%" cy="-1059.82048%" fx="-7787.03547%" fy="-1059.82048%" r="12744.4387%" gradientTransform="matrix(.96825 0 0 1 -2.47222803 0)" id="radialGradient-171">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-172" d="M12.909 14.4605714L.533 7.46171429v-6.752l12.376 6.99885714v6.75199997" />
                    <radialGradient cx="-10799.6927%" cy="-1397.56815%" fx="-10799.6927%" fy="-1397.56815%" r="17053.3371%" gradientTransform="matrix(1 0 0 .90002 0 -1.39733061)" id="radialGradient-174">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-175" d="M17.91225 16.90425L.5535 6.88275V.23625l17.35875 10.0215v6.6465" />
                    <radialGradient cx="-7393.45042%" cy="-1207.27187%" fx="-7393.45042%" fy="-1207.27187%" r="12209.8947%" gradientTransform="matrix(.9602 0 0 1 -2.94207572 0)" id="radialGradient-177">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-178" d="M12.909 14.3131429L.533 7.31428571v-6.752l12.376 6.99885715v6.75200004" />
                    <radialGradient cx="-10799.6927%" cy="-1621.9365%" fx="-10799.6927%" fy="-1621.9365%" r="17053.3371%" gradientTransform="matrix(1 0 0 .90002 0 -1.62166077)" id="radialGradient-180">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-181" d="M15.9108571 15.77475L.53485714 7.038V.38925l15.37599996 8.739v6.6465" />
                    <radialGradient cx="-8494.01962%" cy="-1513.63995%" fx="-8494.01962%" fy="-1513.63995%" r="13445.9492%" gradientTransform="matrix(1 0 0 .99938 0 -.00933916)" id="radialGradient-183">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-184" d="M8.91225 6.41825L.666 1.65725V.5525l8.24625 4.761v1.10475" />
                    <radialGradient cx="-15674.0709%" cy="-4296.88147%" fx="-15674.0709%" fy="-4296.88147%" r="34695.397%" gradientTransform="matrix(.71132 0 0 1 -45.24743765 0)" id="radialGradient-186">
                        <stop stopColor="#387494" offset="0%" />
                        <stop stopColor="#6EC3BF" offset="100%" />
                    </radialGradient>
                    <path id="path-187" d="M8.91225 10.109L.666 5.4538V.3982l8.24625 4.6552v5.0556" />
                    <linearGradient x1="931.59618%" y1="727.797916%" x2="-3079.12688%" y2="727.797916%" id="linearGradient-189">
                        <stop stopColor="#84CDDB" offset="0%" />
                        <stop stopColor="#9CD4D6" offset="100%" />
                    </linearGradient>
                    <path id="path-190" d="M8.36775 7.9154L.2205 3.3174 5.976.0658l2.39175 1.3508v6.4988" />
                    <linearGradient x1="2547.66639%" y1="1218.58184%" x2="-3188.64954%" y2="1218.58184%" id="linearGradient-192">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-193" d="M4.73433333 5.573l-4.144-2.394 4.144-2.39166667V5.573" />
                    <linearGradient x1="5523.42342%" y1="1933.30083%" x2="-6172.07207%" y2="1933.30083%" id="linearGradient-195">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-196" d="M24.66575 17.9244444L.99575 4.42666667V3.19777778l4.68-2.66888889 18.99 10.82888891v6.5666666" />
                    <linearGradient x1="983.479087%" y1="469.213081%" x2="-990.969582%" y2="469.213081%" id="linearGradient-198">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-199" d="M.155 2.525V.87l1.4325.8275L.155 2.525" />
                    <linearGradient x1="9088.7%" y1="3067%" x2="-11682.5%" y2="3067%" id="linearGradient-201">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-202" d="M5.51466667 5.92666667L.47466667 3.017l5.04-2.90966667v5.81933334" />
                    <linearGradient x1="3459.12037%" y1="2140.01604%" x2="-6157.17593%" y2="2140.01604%" id="linearGradient-204">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-205" d="M17.532 14.3748571L.17325 4.19428571v-.76571428L5.2785.43428571 17.532 7.62285714v6.75199996" />
                    <linearGradient x1="1040.46662%" y1="823.544843%" x2="-1651.84705%" y2="823.544843%" id="linearGradient-207">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-208" d="M12.5146667 13.8011429L.13866667 6.80228571v-6.752L12.5146667 7.04914286v6.75200004" />
                    <linearGradient x1="1467.96757%" y1="721.343085%" x2="-2448.17119%" y2="721.343085%" id="linearGradient-210">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-211" d="M15.5245714 13.82875L.14857143 5.08975V.13525l15.37599997 8.739v4.9545" />
                    <linearGradient x1="1178.59373%" y1="615.658889%" x2="-1909.14226%" y2="615.658889%" id="linearGradient-213">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-214" d="M7.30575 9.3368l-6.435-3.6322V1.0714L2.5245.1386 7.30575 2.838v6.4988" />
                    <linearGradient x1="3774.8951%" y1="797.775652%" x2="-3487.76224%" y2="797.775652%" id="linearGradient-216">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-217" d="M10.6057143 12.8483333L.69028571 7.00566667v-6.895L15.408 8.786v1.2273333l-4.8022857 2.835" />
                    <linearGradient x1="1600.3572%" y1="566.807108%" x2="-1625.48532%" y2="566.807108%" id="linearGradient-219">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path d="M27.2756154 17.4488889L.94138462 2.30222222l2.1816923-1.25333333C4.32992308.35333333 5.945.01333333 7.63592308.01333333c.25876923 0 .51976923.0088889.783.02444445L27.2756154 10.8844444v6.5644445" id="path-220" />
                    <linearGradient x1="533.053791%" y1="764.236554%" x2="-1226.47183%" y2="764.236554%" id="linearGradient-222">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-223" d="M11.9606667 13.3657143L.66033333 6.97485714V.22057143L11.9606667 6.61371429v6.75200001" />
                    <linearGradient x1="1013.13236%" y1="936.950096%" x2="-3275.77948%" y2="936.950096%" id="linearGradient-225">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-226" d="M7.81425 11.5346667L.4095 7.10133333V.20866667L7.81425 4.642v6.8926667" />
                    <linearGradient x1="1281.28229%" y1="1028.01813%" x2="-5030.23397%" y2="1028.01813%" id="linearGradient-228">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-229" d="M17.0088889 16.911L.72 7.389V.74025l16.2888889 9.52425v6.6465" />
                    <linearGradient x1="880.968622%" y1="780.422986%" x2="-1952.7558%" y2="780.422986%" id="linearGradient-231">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-232" d="M21.0289 18.7533333L.368 7.22888889V.66222222L21.0289 12.1888889v6.5644444" />
                    <linearGradient x1="614.371591%" y1="622.40511%" x2="-1697.90716%" y2="622.40511%" id="linearGradient-234">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-235" d="M7.8525 10.9472l-7.407-4.18V.2662l7.407 4.1822v6.4988" />
                    <linearGradient x1="1341.16039%" y1="912.399588%" x2="-4968.43864%" y2="912.399588%" id="linearGradient-237">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-238" d="M8.0505 10.8108L.6435 6.6286V.1298l7.407 4.18v6.501" />
                    <linearGradient x1="1186.60389%" y1="851.884655%" x2="-5122.99514%" y2="851.884655%" id="linearGradient-240">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-241" d="M12.8925714 13.9314286L.76914286 6.93257143V.17828571L12.8925714 7.17942857v6.75200003" />
                    <linearGradient x1="1217.47738%" y1="820.009972%" x2="-2698.66139%" y2="820.009972%" id="linearGradient-243">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-244" d="M4.865 9.5216L.3325 7.2204V.7194L4.865 3.0228v6.4988" />
                    <linearGradient x1="3155.87424%" y1="1126.99325%" x2="-8300.93767%" y2="1126.99325%" id="linearGradient-246">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-247" d="M7.40925 11.635l-7.407-4.43333333v-6.895l7.407 4.43566666V11.635" />
                    <linearGradient x1="1620.53463%" y1="882.760041%" x2="-4689.0644%" y2="882.760041%" id="linearGradient-249">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-250" d="M44.5452381 32.939L.73228571 7.5095V.86075L44.5452381 26.2925v6.6465" />
                    <linearGradient x1="329.868206%" y1="298.737462%" x2="-731.186146%" y2="298.737462%" id="linearGradient-252">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-253" d="M12.2476667 13.8697143L.94733333 7.47657143V.72228571L12.2476667 7.11542857v6.75428573" />
                    <linearGradient x1="886.702457%" y1="523.331015%" x2="-3402.20937%" y2="523.331015%" id="linearGradient-255">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-256" d="M12.8925714 14.0697143L.76914286 7.07085714V.31657143L12.8925714 7.31771429v6.75200001" />
                    <linearGradient x1="1217.47738%" y1="595.67891%" x2="-2698.66139%" y2="595.67891%" id="linearGradient-258">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-259" d="M23.9204545 21.4917L.30227273 7.694V.8975l23.61818177 13.8v6.7942" />
                    <linearGradient x1="550.577367%" y1="352.836721%" x2="-1448.19092%" y2="352.836721%" id="linearGradient-261">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-262" d="M7.712 10.7052l-7.407-4.18V.0264l7.407 4.18v6.4988" />
                    <linearGradient x1="1359.93317%" y1="502.801813%" x2="-4949.66586%" y2="502.801813%" id="linearGradient-264">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-265" d="M25.1585 19.7977778L.7415 5.87333333V.72222222l24.417 13.92444448v5.1511111" />
                    <linearGradient x1="595.051603%" y1="338.921249%" x2="-1318.99189%" y2="338.921249%" id="linearGradient-267">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-268" d="M17.9533333 16.1585L.51333333 5.96375V.74825L17.9533333 10.943v5.2155" />
                    <linearGradient x1="658.358818%" y1="315.973135%" x2="-1988.32824%" y2="315.973135%" id="linearGradient-270">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-271" d="M12.7386667 12.7083333L.36266667 5.56366667V.155L12.7386667 7.29966667v5.40866663" />
                    <linearGradient x1="787.424585%" y1="295.966543%" x2="-3128.71418%" y2="295.966543%" id="linearGradient-273">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-274" d="M21.9103 19.8058L.4559 7.4203V.6238l21.4544 12.3878v6.7942" />
                    <linearGradient x1="318.567753%" y1="512.134293%" x2="-1908.19039%" y2="512.134293%" id="linearGradient-276">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-277" d="M13.19075 14.6365714L.41975 7.144V.392l16.4925 9.6731429v2.3885714l-3.7215 2.1828571" />
                    <linearGradient x1="378.144611%" y1="558.552632%" x2="-2455.57981%" y2="558.552632%" id="linearGradient-279">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-280" d="M2.4025 2.4875L.3125 1.28l2.09-1.2075v2.415" />
                    <linearGradient x1="3489.5%" y1="1334.1%" x2="-1827.35%" y2="1334.1%" id="linearGradient-282">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-283" d="M.6425 1.37V.32l.91.525-.91.525" />
                    <linearGradient x1="2569.2%" y1="2689%" x2="-18202%" y2="2689%" id="linearGradient-285">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-286" d="M12.909 12.936L.533 5.79133333v-3.71L3.28866667.49 12.909 6.04333333V12.936" />
                    <linearGradient x1="742.138009%" y1="205.474316%" x2="-260.284691%" y2="205.474316%" id="linearGradient-288">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-289" d="M17.91225 17.4288889L.5535 7.53111111V.96666667l17.35875 9.89777773v6.5644445" />
                    <linearGradient x1="541.464679%" y1="84.8407127%" x2="-147.692806%" y2="84.8407127%" id="linearGradient-291">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-292" d="M12.909 13.8102857L.533 6.81142857v-6.752l12.376 6.99885714v6.75199999" />
                    <linearGradient x1="742.138009%" y1="-30.8510638%" x2="-260.284691%" y2="-30.8510638%" id="linearGradient-294">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                    <path id="path-295" d="M15.9108571 14.09875L.53485714 5.35975V.14425l15.37599996 8.739v5.2155" />
                    <linearGradient x1="403.077152%" y1="120.364399%" x2="-2684.65884%" y2="120.364399%" id="linearGradient-297">
                        <stop stopColor="#4687A7" offset="0%" />
                        <stop stopColor="#4789A7" offset="100%" />
                    </linearGradient>
                </defs>
                <g id="all" fill="none" fillRule="evenodd">
                    <g id="all2" transform="translate(-804 -246)">
                        <g id="laptop" transform="translate(804 246)">
                            <g id="bottom" transform="translate(18 371)">
                                <mask id="mask-2" fill="#fff">
                                    <use xlinkHref="#path-1" />
                                </mask>
                                <path d="M163.956495 3.6489823L4.24453608 95.8168142c-.71570103.4107079-1.14015464 1.1486283-1.14015464 1.9700442 0 .8236726.42445361 1.5638496 1.14015464 1.9768142L262.26266 248.656593c6.387124 3.687345 14.325309 3.689602 20.712433 0l149.358-86.19c.713443-.410708 1.140154-1.148628 1.140154-1.974558 0-.821416-.426711-1.559336-1.140154-1.970044L163.956495 3.6489823zM272.618876 253.855885c-4.002958 0-8.005917-1.031283-11.575391-3.089336L3.02536082 101.873628c-1.4765567-.855265-2.3593299-2.3807519-2.35707216-4.0867696 0-1.7037611.88051546-3.2269911 2.35707216-4.08L163.956495.83721239l.611845.3520354L433.552268 156.412035c1.474299.853009 2.357072 2.376239 2.357072 4.08s-.882773 3.231505-2.357072 4.084514l-149.358 86.187743c-3.569474 2.06031-7.572433 3.091593-11.575392 3.091593z" id="Fill-175" fill="url(#linearGradient-3)" mask="url(#mask-2)" />
                            </g>
                            <g id="body" transform="translate(0 90)">
                                <g id="Group-180" transform="translate(215)">
                                    <mask id="mask-5" fill="#fff">
                                        <use xlinkHref="#path-4" />
                                    </mask>
                                    <path d="M298.680451 174.070769c0-.004513 0-.006769.002256-.011282-.002256.004513-.002256.006769-.002256.011282m.004511-.027077c0-.004513 0-.011282.002256-.018051-.002256.006769-.002256.013538-.002256.018051m.002256-.022564c.157895-1.058256-.101504-2.297025-.618045-3.477128l-4.718797 2.089436c-.690226-1.349333-1.725564-2.563282-2.905263-3.244718l-60.457895-34.917949v-5.185231l64.962406 37.51959c2.330075 1.344821 4.103008 4.779077 3.737594 7.216m-76.966917-44.324923l-67.574436-39.0268717v-5.1852307l67.574436 39.0268714v5.185231m-78.500752-45.3380512l-4.635338-2.6783589v-5.1829744l4.635338 2.6761026v5.1852307m-12.902256-7.452923l-18.004511-10.3975385v-5.1852308l18.004511 10.3997949v5.1829744m-26.271428-15.1721026L58.7120301 35.5497436v-5.1829744l45.3338349 26.1811282v5.1852308M41.1067669 25.382359l-4.6353383-2.6761026v-5.1852308l4.6353383 2.678359v5.1829744m-15.5616541-8.9872821l-4.6353384-2.6761025V8.53374359l4.6353384 2.67610261v5.1852307M12.6428571 8.94215385L3.43082707 3.62379487C2.7 3.20184615 2.00526316 2.99876923 1.38721805 2.99876923c-.3924812 0-.7556391.08123077-1.07593986.2414359L4.59699248.78297436l-.00676692.02482051c.37894737-.25046154.82781955-.38358974 1.32631579-.38358974.60902256 0 1.29473685.1985641 2.01654136.61374359l4.70977439 2.72123077v5.18297436" id="Fill-178" fill="url(#linearGradient-6)" mask="url(#mask-5)" />
                                </g>
                                <g id="Group-183" transform="translate(471 171)">
                                    <mask id="mask-8" fill="#fff">
                                        <use xlinkHref="#path-7" />
                                    </mask>
                                    <path d="M.953 223.62592c.56925-.38872.96975-1.0622 1.12725-1.99106l36.108-215.17234c.20475-1.22266-.135-2.70522-.82125-4.05444L42.074.31532c.51525 1.18198.774 2.42272.6165 3.48266v.00452c-.00225.00678-.00225.01356-.00225.01808-.00225.00678-.00225.0113-.00225.01582-.00225.00452-.00225.00678-.00225.0113-.00225.00904-.0045.01808-.0045.02712l-36.108 215.17234c-.189 1.12096-.74025 1.8645-1.5075 2.18994l.0045.00226L.953 223.62592" id="Fill-181" fill="url(#linearGradient-9)" mask="url(#mask-8)" />
                                </g>
                                <path d="M180.791489 228.139768l287.394496 166.23444c2.217954 1.283009 4.117445.543073 4.508184-1.760459l36.246164-215.439056c.413326-2.448352-1.373235-5.948905-3.733481-7.313374L217.814614 3.62687827c-2.217954-1.28527118-4.119703-.54307233-4.508184 1.75819667L177.060266 220.826394c-.415584 2.448351 1.370976 5.948905 3.731223 7.313374" id="Fill-184" fill="#242250" />
                                <path d="M188 221l34.144992-203 5.464734 3.161021v4.3308477l25.341827 14.6646937v-4.3285849l4.638591 2.6858496v4.328585l23.745972 13.7437664v-4.3308477l16.220394 9.3902914v4.328585l7.430774 4.2991696v-4.328585l6.331507 3.6633451v4.3285849l16.030788 9.2794182v-4.328585l18.017143 10.4266177v4.068372l25.341828 14.6669563v-4.068372l4.63859 2.68585v4.066109l23.745972 13.743766v-4.068372l4.638591 2.68585v4.068372l7.430773 4.29917v-4.068372l4.153288 2.405272v4.066109l7.428517 4.29917v-4.06611l6.331506 3.663346v4.068372l16.030789 9.277155v-4.066109L499 178.230051l-4.083314 24.131917-133.108361-77.036593c-1.485252-.859834-3.336174-1.35537-5.155494-1.466243l-11.286109-6.532475v6.68634l3.719902 2.151847-21.737045 12.580728v-1.040851l-11.972304-6.930714v6.68634l7.096705 4.106838-7.41723 4.292381-5.121636-2.961901v5.926066l-21.265285 12.306938-9.572877-5.53914v6.684077l3.798904 2.199365-9.184635 5.315131v-2.0455l-17.617615-10.19582v6.68634l13.608789 7.874269-7.41723 4.292381-4.695021-2.715265v5.432793l-8.49844 4.919155-1.659058-.959394v1.918788l-59.134693 34.223652L188 221m39.609726-49.395196v6.68634l15.182073 8.786145v-6.684077l-15.182073-8.788408m0-15.271103v6.68634l25.341827 14.666957v-6.68634l-25.341827-14.666957m202.31252-5.428267v6.68634l15.18433 8.786145v-6.684077l-15.18433-8.788408m-189.401212-2.369069v6.684078l10.933981 6.32883v-6.68634l-10.933981-6.326568m16.222652-5.883074v6.684077l17.712418 10.252388v-6.684077l-17.712418-10.252388m-29.13396-1.590693v6.68634l8.272717 4.787918v-6.68634l-8.272717-4.787918m44.706532-4.667993v6.68634l7.428516 4.29917v-6.684078l-7.428516-4.301432m-44.706532-10.60311v6.68634l24.493112 14.175946v-6.68634l-24.493112-14.175946m16.610894-5.656802v6.684078l23.457047 13.576325v-6.684078l-23.457047-13.576325m32.215067 3.373717v6.68634l10.933982 6.326568v-6.684078l-10.933982-6.32883m99.850458-3.645243v6.684077l14.53425 8.412796v-6.68634l-14.53425-8.410533m-65.484258-7.007647v6.68634l16.547692 9.575835v-6.684077l-16.547692-9.578098m-83.192161-17.6062306v6.6863396l44.187371 25.573271v-6.684077l-44.187371-25.5755336m0 15.2711026v6.68634l11.970046 6.928452v-6.68634l-11.970046-6.928452m117.756996-8.553084v6.68634l15.18433 8.786145v-6.684078l-15.18433-8.788407m-39.072507-6.9918078v6.6840778l21.055364 12.187014v-6.684077l-21.055364-12.1870148m-21.09825 3.0614613v6.6840775l7.428516 4.301432v-6.68634l-7.428516-4.2991695m-32.244412-3.3918185v6.68634l7.428517 4.29917v-6.6863405l-7.428517-4.2991695m20.759668-3.2560553v6.68634l7.428516 4.2991693V95.69052l-7.428516-4.3014323m-29.490601-1.7966004v6.6840774l4.090085 2.3690687v-6.6863401l-4.090085-2.366806m67.944629-6.5777295v6.6840774l15.18433 8.7884077v-6.68634l-15.18433-8.7861451m-63.371498-6.04599v6.68634l20.276622 11.7344703v-6.6840773l-20.276622-11.736733m-21.184025 3.0094187v6.6863401l11.970046 6.9284512v-6.6863401l-11.970046-6.9284512m50.577565-1.2693864v6.6863401l7.430774 4.2991696v-6.6840774l-7.430774-4.3014323m-15.572572-9.0124171v6.6863401l10.933982 6.3265674v-6.6840773l-10.933982-6.3288302m-35.004993-4.9892995v6.6863401l16.545434 9.5758346v-6.6863401l-16.545434-9.5758346m0-15.2711029v6.6863401l30.366403 17.5745527v-6.68634l-30.366403-17.5745528m30.917165 2.5342473v6.6863401l14.53425 8.4105334V60.383024l-14.53425-8.4127961m-11.094245-6.4216017v6.6863401l6.455654 3.7357521V49.286641l-6.455654-3.7380148m-19.82292-11.4719946v6.6840773l15.182073 8.7884077v-6.6840773l-15.182073-8.7884077" id="Fill-185" fill="#302B6C" />
                                <g id="Group-188" transform="translate(0 245)">
                                    <mask id="mask-11" fill="#fff">
                                        <use xlinkHref="#path-10" />
                                    </mask>
                                    <path d="M.32538461 84.7590424l15.69076919 8.2045932L173.355433 2.00035593c2.632452-1.52054237 7.228509-1.33047457 10.269952.42765254L454.989375 159.313136c2.596298-1.452661 14.436683-7.154695 14.436683-7.154695l-5.743943 14.98594-.022596-.018101c-.237259.665237-.747932 1.287483-1.606586 1.783017l-165.708895 95.80322c-2.632451 1.522805-7.230769 1.330475-10.269951-.42539L8.38317308 103.740932c-1.24956731-.721805-2.01331731-1.595212-2.32966346-2.479932l-.02259616.013576L.32538462 84.7590424" id="Fill-186" fill="url(#linearGradient-12)" mask="url(#mask-11)" />
                                </g>
                                <g id="Group-191" transform="translate(0 227)">
                                    <mask id="mask-14" fill="#fff">
                                        <use xlinkHref="#path-13" />
                                    </mask>
                                    <path d="M2.75221154 105.136083L287.34851 269.200058c3.116009 1.795934 7.827307 1.992223 10.525288.435446l169.830433-97.900959c2.695721-1.556776 2.359038-4.273239-.756971-6.069173L182.350962 1.60139669c-3.11601-1.79593388-7.827308-1.98996694-10.525289-.43544628L1.99524038 99.0691653c-2.69798077 1.5567767-2.35903846 4.2732397.75697116 6.0669177" id="Fill-189" fill="url(#linearGradient-15)" mask="url(#mask-14)" />
                                </g>
                                <path d="M373 461.59015v-3.226955c0-.305883-.183627-.445983-.408569-.312888l-11.182862 6.565988c-.224942.133095-.408569.488013-.408569.793896v3.226955c0 .303548.183627.445983.408569.312888l11.182862-6.568323c.224942-.130759.408569-.485678.408569-.791561" id="Fill-192" fill="#2C3D84" />
                                <path d="M357 471.59015v-3.226955c0-.305883-.183627-.445983-.408569-.312888l-11.182862 6.565988c-.224942.133095-.408569.488013-.408569.793896v3.226955c0 .303548.183627.445983.408569.312888l11.182862-6.568323c.224942-.130759.408569-.485678.408569-.791561" id="Fill-193" fill="#2C3D84" />
                                <path d="M424.090603 390.429758l-236.769024-136.74605c-1.579003-.911987-3.52448-.911987-5.101221.002263L97.9065703 302.48295c-1.2102674.701529-1.2080053 2.450825.0022621 3.15009L334.56701 442.315726c1.576741.911988 3.519955.911988 5.096696.002263l84.426897-48.738141c1.212529-.699266 1.212529-2.448562 0-3.15009" id="Fill-194" fill="#AAA9C9" />
                                <path d="M424.090603 393.509177L423.242285 394 187.321579 257.808994c-1.579003-.911529-3.52448-.909267-5.101221.002261l-83.4654695 48.283888-.8460561-.488562c-1.2102674-.698914-1.2125295-2.44733-.0022621-3.148506l84.3137877-48.772449c1.576741-.913791 3.522218-.913791 5.101221-.002262L424.090603 390.36067c1.212529.701176 1.212529 2.449593 0 3.148507" id="Fill-195" fill="#8C90BA" />
                                <path id="Fill-196" fill="#242250" d="M175 266.279002L379.890836 385 389 379.720998 184.111418 261 175 266.279002" />
                                <path id="Fill-197" fill="#242250" d="M153 279.295596L345.856423 391 355 385.706673 162.141315 274 153 279.295596" />
                                <path id="Fill-198" fill="#242250" d="M138 287.263992L364.864589 418 374 412.736008 147.133151 282 138 287.263992" />
                                <path id="Fill-199" fill="#242250" d="M124 296.263905L350.864589 427 360 421.736095 133.135411 291 124 296.263905" />
                                <path id="Fill-200" fill="#242250" d="M109 304.263992L335.866849 435 345 429.736008 118.135411 299 109 304.263992" />
                                <path id="Fill-201" fill="#242250" d="M393 392.501178L401.998887 398 411 392.498822 402.001113 387 393 392.501178" />
                                <path id="Fill-202" fill="#242250" d="M361 399.202563L379.896396 410 389 404.797437 370.103604 394 361 399.202563" />
                                <g id="Group-205" transform="translate(112 355)">
                                    <mask id="mask-17" fill="#fff">
                                        <use xlinkHref="#path-16" />
                                    </mask>
                                    <path d="M66.0887037 68.01775L2.33014815 31.35625c-2.49196296-1.43325-2.49196296-3.75525 0-5.1885L45.9293333 1.09825c2.491963-1.43325 6.5315186-1.43325 9.0257408 0l63.7585559 36.6615c2.491963 1.431 2.491963 3.75525 0 5.1885l-43.6014448 25.0695c-2.491963 1.43325-6.5315185 1.43325-9.0234815 0" id="Fill-203" fill="url(#linearGradient-18)" mask="url(#mask-17)" />
                                </g>
                                <path d="M230.156157 395.442986l-63.719356-37.197114c-2.492689-1.454278-6.529761-1.454278-9.020192 0l-43.572379 25.437319c-.769934.447471-1.271181.986261-1.564705 1.554731-.659298-1.271637-.15805-2.705369 1.564705-3.709894l43.572379-25.437319c2.490431-1.454279 6.527503-1.454279 9.020192 0l63.719356 37.199397c1.720497 1.004525 2.224002 2.435973 1.564704 3.709894-.293523-.56847-.797028-1.107261-1.564704-1.557014" id="Fill-206" fill="#8C90BA" />
                                <g id="Group-209" transform="translate(187 17)">
                                    <mask id="mask-20" fill="#fff">
                                        <use xlinkHref="#path-19" />
                                    </mask>
                                    <path id="Fill-207" fill="url(#linearGradient-21)" mask="url(#mask-20)" d="M34.3290435.54307407L311.631478 160.528l-34.387826 202.583259L.12886956 203.232519 34.3290435.54307407" />
                                </g>
                                <g id="Group-212" transform="translate(187 17)">
                                    <mask id="mask-23" fill="#fff">
                                        <use xlinkHref="#path-22" />
                                    </mask>
                                    <path id="Fill-210" fill="url(#linearGradient-24)" mask="url(#mask-23)" d="M34.3290435.54307407L311.631478 160.528l-34.387826 202.583259L.12886956 203.232519 34.3290435.54307407" />
                                </g>
                                <g id="Group-224" transform="translate(187 17)">
                                    <mask id="mask-26" fill="#fff">
                                        <use xlinkHref="#path-25" />
                                    </mask>
                                    <path d="M214.748696 202.482444c-.644348-1.233555-.176348-2.618481 1.465043-3.610296.002261-.002259.004522-.002259.006783-.004518.004521-.00226.009043-.004519.015826-.009037.006782-.004519.013565-.009037.020348-.011297.002261-.002259.004521-.004518.006782-.004518.006783-.004519.013565-.009037.020348-.011297.002261-.002259.004522-.004518.006783-.004518.009043-.006778.018087-.011296.02713-.015815l29.341565-16.928629v2.13274l-29.341565 16.92863c-.770956.442815-1.272869.976-1.569043 1.538555m90.721913-5.659444l-36.492696-21.051778c-1.245739-.720703-2.880348-1.079926-4.514956-1.079926-1.634609 0-3.266957.359223-4.514957 1.079926l-2.297043 1.323926v-2.130481l2.297043-1.326186c1.245739-.718444 2.880348-1.077666 4.514957-1.077666 1.634608 0 3.269217.359222 4.514956 1.077666l36.822783 21.243815-.330087 1.940704m-57.141218-14.348556l-1.84713-1.06637 7.429217-4.285815 1.849392 1.064111-7.431479 4.288074" id="Fill-213" fill="#373076" mask="url(#mask-26)" />
                                    <path d="M273.906609 350.843481c-.879479 0-1.758957-.228185-2.545739-.682296L34.84 213.701926c-.4634783-.266593-.7483478-.684556-.8568696-1.138667.1085218.454111.3956522.872074.8568696 1.138667l.8455652.488 48.4617391-28.017074 1.180174.682296v-1.364592l12.9344347-7.478149v1.055074l3.725913 2.150815-4.3227825 2.491963L288.961739 294.077333l-.972174 5.722704-30.338608-17.504741v-2.95737l-15.20887-8.774963v2.95963l-39.165044-22.597112v-2.959629l-14.557739-8.397667v2.957371l-4.648347-2.681741v-2.957371l-6.466087-3.730037v2.957371l-4.646087-2.681741v-2.95737l-15.20887-8.774963v2.959629l-18.046261-10.412926v-2.695296l-15.208869-8.774963v2.697556l-32.2739134-18.620815-8.1662609 4.710555 202.4789563 116.81726-1.756695 10.351926-3.762087 2.168889 3.090608 1.782555-2.41913 14.246889-8.668174-5.002-8.166261 4.710556 12.742261 7.351629 3.208174-1.850333-1.037739 6.111296-3.309913 1.909074c-.789044.454111-1.668522.682296-2.548.682296M56.8902609 207.235926L48.724 211.946481l206.148348 118.934186 8.164-4.710556L56.8902609 207.235926m21.7201739-12.532111l-8.1662609 4.712815L266.384696 312.460926l8.166261-4.710556L78.6104348 194.703815m211.8073042 90.792852l-32.766782-18.905482v-2.501l-16.056696-9.265222v2.503259l-6.341739-3.66v-2.501L227.812 246.87463v2.501l-4.16-2.399334v-2.503259l-7.442783-4.292593v2.501l-4.646087-2.679481v-2.501l-23.784347-13.722741v2.501l-4.646087-2.679481v-2.50326l-25.382783-14.644518v2.503259l-18.046261-10.412926v-2.238926l-16.056695-9.265222v2.241185l-6.34174-3.66v-2.238926l-7.442782-4.294851v2.241185l-4.031131-2.327037-.128869.074555v-2.388037l-2.577392-1.486592 15.977566-9.235852c.789043-.456371 1.668521-.684556 2.550261-.684556.879478 0 1.758956.225926 2.548.682297l169.872695 98.006666-1.227652 7.225111-35.194956-20.306222v-2.04463l-8.286087-4.780592v2.044629l-45.438957-26.214185v-2.046889l-17.643826-10.180222v2.046889l-4.648348-2.681741v-2.044629l-10.951652-6.319148v2.044629l-4.646087-2.679481v-2.046889l-8.286087-4.780593v2.046889l-18.046261-10.412926v-1.782555l-8.286087-4.780593v1.782556l-11.978087-6.908815-8.164 4.710555 180.114435 103.91463-.972174 5.722704M119.102609 161.84063c.515478-.298223 1.071652-.499297 1.641391-.603223-.569739.103926-1.125913.305-1.641391.603223" id="Fill-215" fill="#393279" mask="url(#mask-26)" />
                                    <path d="M294.073565 263.968185L124.20087 165.961519c-.789044-.456371-1.668522-.682297-2.548-.682297-.88174 0-1.761218.228185-2.550261.684556l-15.977566 9.235852-3.5676517-2.058186 19.5452177-11.300814c.515478-.298223 1.071652-.499297 1.641391-.603223.300696-.054222.603652-.081333.90887-.081333.879478 0 1.758956.228185 2.548.682296l.293913.169445v1.698963l15.208869 8.774963v-1.698963l18.046261 10.410666v1.439149l24.534957 14.154259v-1.436889l4.646087 2.679481v1.439149l17.743304 10.236703v-1.439148l4.646087 2.681741v1.436889L221.312 219.30263v-1.436889l21.130087 12.190963v1.439148l15.20887 8.772704v-1.436889l37.057913 21.381629-.635305 3.754889M35.6855652 214.189926l-.8455652-.488c-.4612174-.266593-.7483478-.684556-.8568696-1.138667-.1786087-.738778.1062609-1.572444.8546087-2.003963l45.7396522-26.446889 3.569913 2.060445-48.4617391 28.017074m49.6419131-28.69937v-4.123149l12.9344347-7.478148v4.123148l-12.9344347 7.478149" id="Fill-216" fill="#373076" mask="url(#mask-26)" />
                                    <path d="M254.872348 330.880667L48.724 211.946481l8.1662609-4.710555L263.036348 326.170111l-8.164 4.710556m-32.402783-27.499704v6.676111l9.676522 5.58263v-6.676111l-9.676522-5.58263m-31.717739-18.297741v6.676111l24.56887 14.172334v-6.673852l-24.56887-14.174593M104.52 235.594148v6.676111l9.676522 5.580371v-6.673852l-9.676522-5.58263m-31.7154783-18.297741v6.673852l24.5666087 14.174593V231.471l-24.5666087-14.174593" id="Fill-217" fill="#2F2A69" mask="url(#mask-26)" />
                                    <path id="Fill-218" fill="#2F2A69" mask="url(#mask-26)" d="M266.384696 312.460926L70.4441739 199.41663l8.1662609-4.712815L274.550957 307.75037l-8.166261 4.710556" />
                                    <path id="Fill-219" fill="#2F2A69" mask="url(#mask-26)" d="M284.105391 322.684074l-3.090608-1.782555 3.762087-2.168889-.671479 3.951444" />
                                    <path id="Fill-220" fill="#2F2A69" mask="url(#mask-26)" d="M277.594087 343.991148l-12.742261-7.351629 8.166261-4.710556 8.668174 5.002-.884 5.209852-3.208174 1.850333" />
                                    <path id="Fill-221" fill="#2F2A69" mask="url(#mask-26)" d="M286.533565 308.380704L84.0546087 191.563444l8.1662609-4.710555 32.2739134 18.620815V209.45l15.208869 8.774963v-3.978556l18.046261 10.412926v3.716482l15.20887 8.772704v-3.716482l4.646087 2.681741v3.716481l6.466087 3.732297v-3.718741l4.648347 2.681741v3.716481l14.557739 8.399926v-3.716482l39.165044 22.597112v3.716481l15.20887 8.772704v-3.716482l30.338608 17.504741-1.456 8.580667" />
                                    <path id="Fill-222" fill="#2F2A69" mask="url(#mask-26)" d="M288.961739 294.077333L97.6650435 183.710259l4.3227825-2.491963 3.714609 2.144037v-4.288074l.128869-.074555 4.031131 2.327037v4.434926l7.442782 4.292592v-4.434926l6.34174 3.66v4.434926l16.056695 9.262963v-4.434926l18.046261 10.412926v4.172852l25.382783 14.644519v-4.172852l4.646087 2.679481v4.175111l23.784347 13.720482v-4.172852l4.646087 2.679481v4.175112l7.442783 4.292592v-4.172852l4.16 2.399334v4.172851l7.440522 4.292593v-4.172852l6.341739 3.66v4.172852l16.056696 9.262963v-4.172852l32.766782 18.905482-1.456 8.580666" />
                                    <path id="Fill-223" fill="#2F2A69" mask="url(#mask-26)" d="M291.389913 279.773963l-180.114435-103.91463 8.164-4.710555 11.978087 6.908815v4.891296l8.286087 4.780592v-4.891296l18.046261 10.412926v4.629222l8.286087 4.780593v-4.629222l4.646087 2.679481v4.631482l10.951652 6.316889v-4.629223l4.648348 2.681741v4.629222l17.643826 10.180223v-4.629223l45.438957 26.214185v4.629223l8.286087 4.780592v-4.629222l35.194956 20.306222-1.456 8.580667" />
                                </g>
                                <path id="Rectangle" fill="url(#linearGradient-27)" fillRule="nonzero" transform="rotate(30 361.85353 83.655617)" d="M201.042986 81.4165249h321.621088v4.47818473H201.042986z" />
                            </g>
                            <g id="Code" transform="translate(227)">
                                <g id="Group-240">
                                    <mask id="mask-29" fill="#fff">
                                        <use xlinkHref="#path-28" />
                                    </mask>
                                    <path id="Fill-238" fill="url(#radialGradient-30)" mask="url(#mask-29)" d="M30.8648 24.9155L.37133333 7.43975V.791L30.8648 18.26675v6.64875" />
                                </g>
                                <g id="Group-243" transform="translate(35 20)">
                                    <mask id="mask-32" fill="#fff">
                                        <use xlinkHref="#path-31" />
                                    </mask>
                                    <path id="Fill-241" fill="url(#radialGradient-33)" mask="url(#mask-32)" d="M10.9054 13.8594286L.2486 7.46857143V.71428571l10.6568 6.39085715v6.75428574" />
                                </g>
                                <g id="Group-246" transform="translate(51 29)">
                                    <mask id="mask-35" fill="#fff">
                                        <use xlinkHref="#path-34" />
                                    </mask>
                                    <path id="Fill-244" fill="url(#radialGradient-36)" mask="url(#mask-35)" d="M7.434 12.0386667L.027 7.60533333v-6.895l7.407 4.43333334v6.89500003" />
                                </g>
                                <g id="Group-249" transform="translate(0 16)">
                                    <mask id="mask-38" fill="#fff">
                                        <use xlinkHref="#path-37" />
                                    </mask>
                                    <path id="Fill-247" fill="url(#radialGradient-39)" mask="url(#mask-38)" d="M16.85375 16.397L.36125 6.875V.22625l16.4925 9.522V16.397" />
                                </g>
                                <g id="Group-252" transform="translate(21 28)">
                                    <mask id="mask-41" fill="#fff">
                                        <use xlinkHref="#path-40" />
                                    </mask>
                                    <path id="Fill-250" fill="url(#radialGradient-42)" mask="url(#mask-41)" d="M20.9379 18.9415L.277 7.0114V.2172L20.9379 12.145v6.7965" />
                                </g>
                                <g id="Group-255" transform="translate(46 42)">
                                    <mask id="mask-44" fill="#fff">
                                        <use xlinkHref="#path-43" />
                                    </mask>
                                    <path id="Fill-253" fill="url(#radialGradient-45)" mask="url(#mask-44)" d="M7.47 12.1146667L.06525 7.679V.78633333L7.47 5.21966667v6.89500003" />
                                </g>
                                <g id="Group-258" transform="translate(58 49)">
                                    <mask id="mask-47" fill="#fff">
                                        <use xlinkHref="#path-46" />
                                    </mask>
                                    <path id="Fill-256" fill="url(#radialGradient-48)" mask="url(#mask-47)" d="M7.668 11.9676667L.26325 7.53433333V.64166667L7.668 5.075v6.8926667" />
                                </g>
                                <path id="Fill-259" fill="#6EC3BF" d="M12 45L0 37.8755194V31l12 7.1244806V45" />
                                <path id="Fill-260" fill="#6EC3BF" d="M21 50l-4-2.3551612V41l4 2.3529118V50" />
                                <g id="Group-263" transform="translate(25 45)">
                                    <mask id="mask-50" fill="#fff">
                                        <use xlinkHref="#path-49" />
                                    </mask>
                                    <path id="Fill-261" fill="url(#radialGradient-51)" mask="url(#mask-50)" d="M8.0706 12.139L.8304 7.70566667v-6.895L8.0706 5.244v6.895" />
                                </g>
                                <g id="Group-266" transform="translate(0 46)">
                                    <mask id="mask-53" fill="#fff">
                                        <use xlinkHref="#path-52" />
                                    </mask>
                                    <path id="Fill-264" fill="url(#radialGradient-54)" mask="url(#mask-53)" d="M44.167 32.4133333L.35404762 6.7932V.09746667L44.167 25.7153333v6.698" />
                                </g>
                                <g id="Group-269" transform="translate(49 75)">
                                    <mask id="mask-56" fill="#fff">
                                        <use xlinkHref="#path-55" />
                                    </mask>
                                    <path id="Fill-267" fill="url(#radialGradient-57)" mask="url(#mask-56)" d="M11.8533333 13.3611429L.55066667 6.97028571V.216L11.8533333 6.60914286v6.75200004" />
                                </g>
                                <g id="Group-272" transform="translate(0 61)">
                                    <mask id="mask-59" fill="#fff">
                                        <use xlinkHref="#path-58" />
                                    </mask>
                                    <path id="Fill-270" fill="url(#radialGradient-60)" mask="url(#mask-59)" d="M12.7853333 14.5634286L.41166667 7.56457143V.81028571L12.7853333 7.80914286v6.75428574" />
                                </g>
                                <g id="Group-275" transform="translate(17 71)">
                                    <mask id="mask-62" fill="#fff">
                                        <use xlinkHref="#path-61" />
                                    </mask>
                                    <path id="Fill-273" fill="url(#radialGradient-63)" mask="url(#mask-62)" d="M23.551 19.9888889L.169 6.65555556V.09111111L23.551 13.4244444v6.5644445" />
                                </g>
                                <g id="Group-278" transform="translate(44 87)">
                                    <mask id="mask-65" fill="#fff">
                                        <use xlinkHref="#path-64" />
                                    </mask>
                                    <path id="Fill-276" fill="url(#radialGradient-66)" mask="url(#mask-65)" d="M8.3295 11.858L.92475 7.42466667v-6.895L8.3295 4.96533333V11.858" />
                                </g>
                                <g id="Group-281" transform="translate(0 77)">
                                    <mask id="mask-68" fill="#fff">
                                        <use xlinkHref="#path-67" />
                                    </mask>
                                    <path id="Fill-279" fill="url(#radialGradient-69)" mask="url(#mask-68)" d="M24.776 21.4503L.36125 7.0385V.2443L24.776 14.6538v6.7965" />
                                </g>
                                <path id="Fill-282" fill="#6EC3BF" d="M47 111l-18-10.290848V94l18 10.290848V111" />
                                <g id="Group-285" transform="translate(51 106)">
                                    <mask id="mask-71" fill="#fff">
                                        <use xlinkHref="#path-70" />
                                    </mask>
                                    <path id="Fill-283" fill="url(#radialGradient-72)" mask="url(#mask-71)" d="M13.3443333 14.376L.96833333 7.37714286v-6.752L13.3443333 7.624v6.752" />
                                </g>
                                <g id="Group-288" transform="translate(0 92)">
                                    <mask id="mask-74" fill="#fff">
                                        <use xlinkHref="#path-73" />
                                    </mask>
                                    <path id="Fill-286" fill="url(#radialGradient-75)" mask="url(#mask-74)" d="M8.394 6.49133333L.331 1.554V.67666667L8.394 5.614v.87733333" />
                                </g>
                                <g id="Group-291" transform="translate(0 93)">
                                    <mask id="mask-77" fill="#fff">
                                        <use xlinkHref="#path-76" />
                                    </mask>
                                    <path id="Fill-289" fill="url(#linearGradient-78)" mask="url(#mask-77)" d="M8.394 10.8533333L.331 5.91366667V.554l8.063 4.93733333v5.36199997" />
                                </g>
                                <path id="Fill-292" fill="#377494" d="M8 103l-8-4.4140951V98l8 4.414095V103" />
                                <g id="Group-295" transform="translate(12 99)">
                                    <mask id="mask-80" fill="#fff">
                                        <use xlinkHref="#path-79" />
                                    </mask>
                                    <path id="Fill-293" fill="url(#radialGradient-81)" mask="url(#mask-80)" d="M12.061 7.47125L.75833333 1.178V.33425L12.061 6.62525v.846" />
                                </g>
                                <g id="Group-298" transform="translate(12 100)">
                                    <mask id="mask-83" fill="#fff">
                                        <use xlinkHref="#path-82" />
                                    </mask>
                                    <path id="Fill-296" fill="url(#linearGradient-84)" mask="url(#mask-83)" d="M12.061 11.8582857L.75833333 5.46514286V.21257143L12.061 6.60571429v5.25257141" />
                                </g>
                                <path id="Fill-299" fill="#377494" d="M24 113l-11-6.360949V106l11 6.360949V113" />
                                <g id="Group-302" transform="translate(28 108)">
                                    <mask id="mask-86" fill="#fff">
                                        <use xlinkHref="#path-85" />
                                    </mask>
                                    <path id="Fill-300" fill="url(#radialGradient-87)" mask="url(#mask-86)" d="M17.8422222 11.7353333L.49777778 1.22133333V.344L17.8422222 10.858v.8773333" />
                                </g>
                                <g id="Group-305" transform="translate(28 109)">
                                    <mask id="mask-89" fill="#fff">
                                        <use xlinkHref="#path-88" />
                                    </mask>
                                    <path id="Fill-303" fill="url(#linearGradient-90)" mask="url(#mask-89)" d="M17.8422222 15.44875L.49777778 5.31025V.142L17.8422222 10.2805v5.16825" />
                                </g>
                                <path id="Fill-306" fill="#377494" d="M47 126l-18-10.354293V115l18 10.354293V126" />
                                <path id="Fill-307" fill="#377494" d="M25 125L0 110.352386V108l25 14.647614V125" />
                                <path id="Fill-308" fill="#407EA0" d="M25 129L0 114.331864V110l25 14.670399V129" />
                                <path id="Fill-309" fill="#377494" d="M54 141l-24-13.658701V125l24 13.658701V141" />
                                <path id="Fill-310" fill="#407EA0" d="M54 145l-24-13.688744V127l24 13.686491V145" />
                                <path id="Fill-311" fill="#6EC3BF" d="M66 152l-7-4.307106V141l7 4.30484V152" />
                                <path id="Fill-312" fill="#377494" d="M77 155l-7-4.520734V148l7 4.523114V155" />
                                <path id="Fill-313" fill="#407EA0" d="M77 159l-7-4.484658V150l7 4.484658V159" />
                                <path id="Fill-314" fill="#407EA0" d="M15 138l-15-8.520035V123l15 8.520035V138" />
                                <path id="Fill-315" fill="#6EC3BF" d="M79 52.7297362L100 65v-6.7297362L79 46v6.7297362" />
                                <g id="Group-318" transform="translate(83 63)">
                                    <mask id="mask-92" fill="#fff">
                                        <use xlinkHref="#path-91" />
                                    </mask>
                                    <path id="Fill-316" fill="url(#radialGradient-93)" mask="url(#mask-92)" d="M16.532 16.8022222L.03725 7.39777778V.83111111L16.532 10.2377778v6.5644444" />
                                </g>
                                <g id="Group-321" transform="translate(88 81)">
                                    <mask id="mask-95" fill="#fff">
                                        <use xlinkHref="#path-94" />
                                    </mask>
                                    <path id="Fill-319" fill="url(#radialGradient-96)" mask="url(#mask-95)" d="M12.5146667 14.4514286L.13866667 7.45257143V.69828571L12.5146667 7.69714286v6.75428574" />
                                </g>
                                <g id="Group-324" transform="translate(82 94)">
                                    <mask id="mask-98" fill="#fff">
                                        <use xlinkHref="#path-97" />
                                    </mask>
                                    <path id="Fill-322" fill="url(#radialGradient-99)" mask="url(#mask-98)" d="M17.532 16.89525L.17325 6.87375V.225L17.532 10.24875v6.6465" />
                                </g>
                                <g id="Group-327" transform="translate(88 112)">
                                    <mask id="mask-101" fill="#fff">
                                        <use xlinkHref="#path-100" />
                                    </mask>
                                    <path id="Fill-325" fill="url(#radialGradient-102)" mask="url(#mask-101)" d="M12.5146667 14.304L.13866667 7.30514286V.55085714L12.5146667 7.552v6.752" />
                                </g>
                                <g id="Group-330" transform="translate(85 126)">
                                    <mask id="mask-104" fill="#fff">
                                        <use xlinkHref="#path-103" />
                                    </mask>
                                    <path id="Fill-328" fill="url(#radialGradient-105)" mask="url(#mask-104)" d="M15.5245714 15.76575L.14857143 7.02675V.38025L15.5245714 9.117v6.64875" />
                                </g>
                                <g id="Group-333" transform="translate(91 145)">
                                    <mask id="mask-107" fill="#fff">
                                        <use xlinkHref="#path-106" />
                                    </mask>
                                    <path id="Fill-331" fill="url(#radialGradient-108)" mask="url(#mask-107)" d="M8.532 6.14825l-8.24625-4.761v-.846l8.24625 4.761v.846" />
                                </g>
                                <g id="Group-336" transform="translate(91 146)">
                                    <mask id="mask-110" fill="#fff">
                                        <use xlinkHref="#path-109" />
                                    </mask>
                                    <path id="Fill-334" fill="url(#linearGradient-111)" mask="url(#mask-110)" d="M8.532 9.845L.28575 5.1898V.1342L8.532 4.7894V9.845" />
                                </g>
                                <path id="Fill-337" fill="#377494" d="M100 156l-8-4.413851V151l8 4.413851V156" />
                                <path id="Fill-338" fill="#377494" d="M100 168l-16-9.570595V156l16 9.570595V168" />
                                <path id="Fill-339" fill="#407EA0" d="M100 172l-16-9.546724V158l16 9.546724V172" />
                                <path id="Fill-340" fill="#407EA0" d="M100 187l-15-8.520035V172l15 8.517841V187" />
                                <path id="Fill-341" fill="#407EA0" d="M26 144l-6-3.584455V134l6 3.586626V144" />
                                <path id="Fill-342" fill="#407EA0" d="M46 156l-15-8.356565V141l15 8.358813V156" />
                                <g id="Group-345" transform="translate(117 68)">
                                    <mask id="mask-113" fill="#fff">
                                        <use xlinkHref="#path-112" />
                                    </mask>
                                    <path id="Fill-343" fill="url(#radialGradient-114)" mask="url(#mask-113)" d="M31.2478667 24.9245L.7544 7.44875V.8l30.4934667 17.478v6.6465" />
                                </g>
                                <g id="Group-348" transform="translate(152 88)">
                                    <mask id="mask-116" fill="#fff">
                                        <use xlinkHref="#path-115" />
                                    </mask>
                                    <path id="Fill-346" fill="url(#radialGradient-117)" mask="url(#mask-116)" d="M11.9606667 13.8685714L.66033333 7.47771429V.72342857L11.9606667 7.11657143v6.75199997" />
                                </g>
                                <path id="Fill-349" fill="#6EC3BF" d="M176 109l-7-4.30484V98l7 4.307106V109" />
                                <g id="Group-352" transform="translate(117 84)">
                                    <mask id="mask-119" fill="#fff">
                                        <use xlinkHref="#path-118" />
                                    </mask>
                                    <path id="Fill-350" fill="url(#radialGradient-120)" mask="url(#mask-119)" d="M17.0088889 16.406L.72 6.884V.23525L17.0088889 9.7595v6.6465" />
                                </g>
                                <g id="Group-355" transform="translate(139 96)">
                                    <mask id="mask-122" fill="#fff">
                                        <use xlinkHref="#path-121" />
                                    </mask>
                                    <path id="Fill-353" fill="url(#radialGradient-123)" mask="url(#mask-122)" d="M21.0289 18.9507L.368 7.0229V.2264l20.6609 11.9301v6.7942" />
                                </g>
                                <path id="Fill-356" fill="#6EC3BF" d="M171 122l-7-4.30484V111l7 4.307106V122" />
                                <g id="Group-359" transform="translate(175 117)">
                                    <mask id="mask-125" fill="#fff">
                                        <use xlinkHref="#path-124" />
                                    </mask>
                                    <path id="Fill-357" fill="url(#radialGradient-126)" mask="url(#mask-125)" d="M8.0505 11.9793333L.6435 7.54366667V.651l7.407 4.43333333v6.89499997" />
                                </g>
                                <g id="Group-362" transform="translate(117 98)">
                                    <mask id="mask-128" fill="#fff">
                                        <use xlinkHref="#path-127" />
                                    </mask>
                                    <path id="Fill-360" fill="url(#radialGradient-129)" mask="url(#mask-128)" d="M12.8925714 14.4342857L.76914286 7.43542857V.68114286L12.8925714 7.68v6.7542857" />
                                </g>
                                <g id="Group-365" transform="translate(134 108)">
                                    <mask id="mask-131" fill="#fff">
                                        <use xlinkHref="#path-130" />
                                    </mask>
                                    <path id="Fill-363" fill="url(#radialGradient-132)" mask="url(#mask-131)" d="M4.865 9.0056L.3325 6.7044V.2034L4.865 2.5068v6.4988" />
                                </g>
                                <g id="Group-368" transform="translate(143 113)">
                                    <mask id="mask-134" fill="#fff">
                                        <use xlinkHref="#path-133" />
                                    </mask>
                                    <path id="Fill-366" fill="url(#radialGradient-135)" mask="url(#mask-134)" d="M7.40925 12.1483333L.00225 7.715V.82l7.407 4.43566667v6.89266663" />
                                </g>
                                <g id="Group-371" transform="translate(117 114)">
                                    <mask id="mask-137" fill="#fff">
                                        <use xlinkHref="#path-136" />
                                    </mask>
                                    <path id="Fill-369" fill="url(#radialGradient-138)" mask="url(#mask-137)" d="M44.5452381 32.4224L.73228571 6.80453333v-6.698L44.5452381 25.7266667V32.4224" />
                                </g>
                                <g id="Group-374" transform="translate(166 142)">
                                    <mask id="mask-140" fill="#fff">
                                        <use xlinkHref="#path-139" />
                                    </mask>
                                    <path id="Fill-372" fill="url(#radialGradient-141)" mask="url(#mask-140)" d="M12.2476667 13.3702857L.94733333 6.97942857V.22514286L12.2476667 6.61828571v6.75199999" />
                                </g>
                                <g id="Group-377" transform="translate(117 129)">
                                    <mask id="mask-143" fill="#fff">
                                        <use xlinkHref="#path-142" />
                                    </mask>
                                    <path id="Fill-375" fill="url(#radialGradient-144)" mask="url(#mask-143)" d="M12.8925714 14.5725714L.76914286 7.57371429V.81942857L12.8925714 7.81828571v6.75428569" />
                                </g>
                                <g id="Group-380" transform="translate(134 139)">
                                    <mask id="mask-146" fill="#fff">
                                        <use xlinkHref="#path-145" />
                                    </mask>
                                    <path id="Fill-378" fill="url(#radialGradient-147)" mask="url(#mask-146)" d="M23.9204545 19.9977778L.30227273 6.66444444V.1L23.9204545 13.4333333v6.5644445" />
                                </g>
                                <g id="Group-383" transform="translate(163 155)">
                                    <mask id="mask-149" fill="#fff">
                                        <use xlinkHref="#path-148" />
                                    </mask>
                                    <path id="Fill-381" fill="url(#radialGradient-150)" mask="url(#mask-149)" d="M7.712 11.8673333L.305 7.434V.539l7.407 4.43566667v6.89266663" />
                                </g>
                                <path id="Fill-384" fill="#6EC3BF" d="M143 166l-25-14.269523V145l25 14.2718V166" />
                                <g id="Group-387" transform="translate(147 161)">
                                    <mask id="mask-152" fill="#fff">
                                        <use xlinkHref="#path-151" />
                                    </mask>
                                    <path id="Fill-385" fill="url(#radialGradient-153)" mask="url(#mask-152)" d="M17.9533333 16.8511111L.51333333 6.78222222V.21555556L17.9533333 10.2844444v6.5666667" />
                                </g>
                                <g id="Group-390" transform="translate(169 174)">
                                    <mask id="mask-155" fill="#fff">
                                        <use xlinkHref="#path-154" />
                                    </mask>
                                    <path id="Fill-388" fill="url(#radialGradient-156)" mask="url(#mask-155)" d="M12.7386667 14.3851429L.36266667 7.38628571v-6.752L12.7386667 7.63314286v6.75200004" />
                                </g>
                                <g id="Group-393" transform="translate(117 159)">
                                    <mask id="mask-158" fill="#fff">
                                        <use xlinkHref="#path-157" />
                                    </mask>
                                    <path id="Fill-391" fill="url(#radialGradient-159)" mask="url(#mask-158)" d="M8.7658 6.77133333L.7028 1.834V.686l8.063 4.93733333v1.148" />
                                </g>
                                <g id="Group-396" transform="translate(117 160)">
                                    <mask id="mask-161" fill="#fff">
                                        <use xlinkHref="#path-160" />
                                    </mask>
                                    <path id="Fill-394" fill="url(#linearGradient-162)" mask="url(#mask-161)" d="M8.7658 11.131L.7028 6.19366667V.834l8.063 4.93733333V11.131" />
                                </g>
                                <path id="Fill-397" fill="#377494" d="M126 171l-8-4.636284V166l8 4.636284V171" />
                                <g id="Group-400" transform="translate(131 167)">
                                    <mask id="mask-164" fill="#fff">
                                        <use xlinkHref="#path-163" />
                                    </mask>
                                    <path id="Fill-398" fill="url(#radialGradient-165)" mask="url(#mask-164)" d="M11.4553333 7.74125L.15266667 1.448V.34325l11.30266663 6.291v1.107" />
                                </g>
                                <g id="Group-403" transform="translate(131 168)">
                                    <mask id="mask-167" fill="#fff">
                                        <use xlinkHref="#path-166" />
                                    </mask>
                                    <path id="Fill-401" fill="url(#linearGradient-168)" mask="url(#mask-167)" d="M11.4553333 12.0936667L.15266667 5.56733333v-5.362L11.4553333 6.73166667v5.36200003" />
                                </g>
                                <path id="Fill-404" fill="#377494" d="M142 181l-11-6.607698V174l11 6.610061V181" />
                                <path id="Fill-405" fill="#6EC3BF" d="M165 194l-18-10.266988V177l18 10.266988V194" />
                                <path id="Fill-406" fill="#377494" d="M143 192l-25-14.425187V175l25 14.425187V192" />
                                <path id="Fill-407" fill="#407EA0" d="M143 197l-25-14.874155V178l25 14.874155V197" />
                                <path id="Fill-408" fill="#377494" d="M172 209l-24-13.439557V193l24 13.439557V209" />
                                <path id="Fill-409" fill="#407EA0" d="M172 213l-24-13.890484V195l24 13.888197V213" />
                                <path id="Fill-410" fill="#377494" d="M183 216l-7-4.350671V209l7 4.350671V216" />
                                <path id="Fill-411" fill="#407EA0" d="M183 220l-7-4.11033V212l7 4.11033V220" />
                                <path id="Fill-412" fill="#377494" d="M195 223l-7-4.349248V216l7 4.351537V223" />
                                <path id="Fill-413" fill="#407EA0" d="M195 226l-7-4.111442V218l7 4.111442V226" />
                                <path id="Fill-414" fill="#407EA0" d="M133 206l-15-8.517841V191l15 8.520035V206" />
                                <path id="Fill-415" fill="#6EC3BF" d="M197 120.732014L218 133v-6.729736L197 114v6.732014" />
                                <g id="Group-418" transform="translate(201 131)">
                                    <mask id="mask-170" fill="#fff">
                                        <use xlinkHref="#path-169" />
                                    </mask>
                                    <path id="Fill-416" fill="url(#radialGradient-171)" mask="url(#mask-170)" d="M16.91225 16.8111111L.41975 7.40666667V.84222222l16.4925 9.40444448v6.5644444" />
                                </g>
                                <g id="Group-421" transform="translate(205 149)">
                                    <mask id="mask-173" fill="#fff">
                                        <use xlinkHref="#path-172" />
                                    </mask>
                                    <path id="Fill-419" fill="url(#radialGradient-174)" mask="url(#mask-173)" d="M12.909 14.4605714L.533 7.46171429v-6.752l12.376 6.99885714v6.75199997" />
                                </g>
                                <g id="Group-424" transform="translate(200 162)">
                                    <mask id="mask-176" fill="#fff">
                                        <use xlinkHref="#path-175" />
                                    </mask>
                                    <path id="Fill-422" fill="url(#radialGradient-177)" mask="url(#mask-176)" d="M17.91225 16.90425L.5535 6.88275V.23625l17.35875 10.0215v6.6465" />
                                </g>
                                <g id="Group-427" transform="translate(205 180)">
                                    <mask id="mask-179" fill="#fff">
                                        <use xlinkHref="#path-178" />
                                    </mask>
                                    <path id="Fill-425" fill="url(#radialGradient-180)" mask="url(#mask-179)" d="M12.909 14.3131429L.533 7.31428571v-6.752l12.376 6.99885715v6.75200004" />
                                </g>
                                <g id="Group-430" transform="translate(202 193)">
                                    <mask id="mask-182" fill="#fff">
                                        <use xlinkHref="#path-181" />
                                    </mask>
                                    <path id="Fill-428" fill="url(#radialGradient-183)" mask="url(#mask-182)" d="M15.9108571 15.77475L.53485714 7.038V.38925l15.37599996 8.739v6.6465" />
                                </g>
                                <g id="Group-433" transform="translate(209 212)">
                                    <mask id="mask-185" fill="#fff">
                                        <use xlinkHref="#path-184" />
                                    </mask>
                                    <path id="Fill-431" fill="url(#radialGradient-186)" mask="url(#mask-185)" d="M8.91225 6.41825L.666 1.65725V.5525l8.24625 4.761v1.10475" />
                                </g>
                                <g id="Group-436" transform="translate(209 214)">
                                    <mask id="mask-188" fill="#fff">
                                        <use xlinkHref="#path-187" />
                                    </mask>
                                    <path id="Fill-434" fill="url(#linearGradient-189)" mask="url(#mask-188)" d="M8.91225 10.109L.666 5.4538V.3982l8.24625 4.6552v5.0556" />
                                </g>
                                <path id="Fill-437" fill="#377494" d="M218 224l-8-4.638317V219l8 4.638317V224" />
                                <path id="Fill-438" fill="#377494" d="M218 236l-16-9.359452V224l16 9.359452V236" />
                                <path id="Fill-439" fill="#407EA0" d="M218 239l-16-9.036962V226l16 9.039166V239" />
                                <path id="Fill-440" fill="#407EA0" d="M218 255l-15-8.517841V240l15 8.520035V255" />
                                <path id="Fill-441" fill="#6EC3BF" d="M144 212l-6-3.585233V202l6 3.585233V212" />
                                <path id="Fill-442" fill="#407EA0" d="M164 223l-15-8.358813V208l15 8.356565V223" />
                                <path id="Fill-443" fill="#407EA0" d="M30 162L0 144.614438V138l30 17.385562V162" />
                                <path id="Fill-444" fill="#407EA0" d="M46 171l-11-6.320292V158l11 6.322553V171" />
                                <path id="Fill-445" fill="#407EA0" d="M58 178l-7-4.30484V167l7 4.307106V178" />
                                <path id="Fill-446" fill="#407EA0" d="M17 169l-17-9.421455V153l17 9.421455V169" />
                                <path id="Fill-447" fill="#407EA0" d="M41 184l-20-11.466405V166l20 11.468616V184" />
                                <path id="Fill-448" fill="#407EA0" d="M53 191l-7-4.30484V180l7 4.307106V191" />
                                <path id="Fill-449" fill="#407EA0" d="M65 198l-7-4.307106V187l7 4.30484V198" />
                                <path id="Fill-450" fill="#407EA0" d="M12 183l-12-7.124481V169l12 7.124481V183" />
                                <path id="Fill-451" fill="#407EA0" d="M21 187l-4-2.355161V178l4 2.352912V187" />
                                <path id="Fill-452" fill="#407EA0" d="M33 194l-7-4.30484V183l7 4.30484V194" />
                                <path id="Fill-453" fill="#407EA0" d="M44 216L0 190.632531V184l44 25.369713V216" />
                                <path id="Fill-454" fill="#407EA0" d="M60 225l-11-6.320292V212l11 6.322553V225" />
                                <path id="Fill-455" fill="#407EA0" d="M12 213l-12-7.124481V199l12 7.124481V213" />
                                <path id="Fill-456" fill="#407EA0" d="M40 229l-23-13.401832V209l23 13.401832V229" />
                                <path id="Fill-457" fill="#407EA0" d="M52 236l-7-4.30484V225l7 4.307106V236" />
                                <path id="Fill-458" fill="#407EA0" d="M25 235L0 220.730477V214l25 14.269523V235" />
                                <path id="Fill-459" fill="#407EA0" d="M47 248l-18-10.290848V231l18 10.290848V248" />
                                <path id="Fill-460" fill="#407EA0" d="M55.9684037 253L52 250.771778V244l10 5.611819L55.9684037 253" />
                                <g id="Group-463" transform="translate(55 250)">
                                    <mask id="mask-191" fill="#fff">
                                        <use xlinkHref="#path-190" />
                                    </mask>
                                    <path id="Fill-461" fill="url(#linearGradient-192)" mask="url(#mask-191)" d="M8.36775 7.9154L.2205 3.3174 5.976.0658l2.39175 1.3508v6.4988" />
                                </g>
                                <path id="Fill-464" fill="#407EA0" d="M8 241l-8-4.590022V230l8 4.590022V241" />
                                <path id="Fill-465" fill="#407EA0" d="M24 250l-11-6.322553V237l11 6.320292V250" />
                                <path id="Fill-466" fill="#407EA0" d="M42.904164 261L29 252.888112V246l18 10.503497v2.107226L42.904164 261" />
                                <g id="Group-469" transform="translate(42 258)">
                                    <mask id="mask-194" fill="#fff">
                                        <use xlinkHref="#path-193" />
                                    </mask>
                                    <path id="Fill-467" fill="url(#linearGradient-195)" mask="url(#mask-194)" d="M4.73433333 5.573l-4.144-2.394 4.144-2.39166667V5.573" />
                                </g>
                                <path id="Fill-470" fill="#407EA0" d="M25 266L0 251.575713V245l25 14.424287V266" />
                                <path id="Fill-471" fill="#407EA0" d="M30 267v-5l5 2.498959L30 267" />
                                <g id="Group-474" transform="translate(29 264)">
                                    <mask id="mask-197" fill="#fff">
                                        <use xlinkHref="#path-196" />
                                    </mask>
                                    <path id="Fill-472" fill="url(#linearGradient-198)" mask="url(#mask-197)" d="M24.66575 17.9244444L.99575 4.42666667V3.19777778l4.68-2.66888889 18.99 10.82888891v6.5666666" />
                                </g>
                                <g id="Group-477" transform="translate(59 278)">
                                    <mask id="mask-200" fill="#fff">
                                        <use xlinkHref="#path-199" />
                                    </mask>
                                    <path id="Fill-475" fill="url(#linearGradient-201)" mask="url(#mask-200)" d="M.155 2.525V.87l1.4325.8275L.155 2.525" />
                                </g>
                                <path id="Fill-478" fill="#4585A7" d="M62.5053175 287L59 284.855856v-1.051802L63.5752051 281 66 282.481982v2.380631L62.5053175 287" />
                                <path id="Fill-479" fill="#4484A5" d="M59 284v-4.232375L60.3319386 279 64 281.112709 59 284" />
                                <path id="Fill-480" fill="#3F7D9F" d="M66 289l-4-2 4-2v4" />
                                <path id="Fill-481" fill="#4585A7" d="M77 292l-7-4.598893V285l7 4.601314V292" />
                                <path id="Fill-482" fill="#3F7D9F" d="M77 297l-7-4.426611V288l7 4.426611V297" />
                                <path id="Fill-483" fill="#407EA0" d="M15 275l-15-8.517841V260l15 8.520035V275" />
                                <path id="Fill-484" fill="#407EA0" d="M100 203l-21-12.270264V184l21 12.270264V203" />
                                <path id="Fill-485" fill="#407EA0" d="M100 217l-17-9.421455V201l17 9.423682V217" />
                                <path id="Fill-486" fill="#407EA0" d="M95.1131222 230L88 225.814465V219l12 7.063522v1.060797L95.1131222 230" />
                                <g id="Group-489" transform="translate(95 227)">
                                    <mask id="mask-203" fill="#fff">
                                        <use xlinkHref="#path-202" />
                                    </mask>
                                    <path id="Fill-487" fill="url(#linearGradient-204)" mask="url(#mask-203)" d="M5.51466667 5.92666667L.47466667 3.017l5.04-2.90966667v5.81933334" />
                                </g>
                                <path id="Fill-490" fill="#407EA0" d="M83 238v-6l5 2.998855L83 238" />
                                <g id="Group-493" transform="translate(82 234)">
                                    <mask id="mask-206" fill="#fff">
                                        <use xlinkHref="#path-205" />
                                    </mask>
                                    <path id="Fill-491" fill="url(#linearGradient-207)" mask="url(#mask-206)" d="M17.532 14.3748571L.17325 4.19428571v-.76571428L5.2785.43428571 17.532 7.62285714v6.75199996" />
                                </g>
                                <g id="Group-496" transform="translate(88 250)">
                                    <mask id="mask-209" fill="#fff">
                                        <use xlinkHref="#path-208" />
                                    </mask>
                                    <path id="Fill-494" fill="url(#linearGradient-210)" mask="url(#mask-209)" d="M12.5146667 13.8011429L.13866667 6.80228571v-6.752L12.5146667 7.04914286v6.75200004" />
                                </g>
                                <g id="Group-499" transform="translate(85 263)">
                                    <mask id="mask-212" fill="#fff">
                                        <use xlinkHref="#path-211" />
                                    </mask>
                                    <path id="Fill-497" fill="url(#linearGradient-213)" mask="url(#mask-212)" d="M15.5245714 13.82875L.14857143 5.08975V.13525l15.37599997 8.739v4.9545" />
                                </g>
                                <path id="Fill-500" fill="#4484A5" d="M100 278l-15-8.377912V268l15 8.377912V278" />
                                <path id="Fill-501" fill="#4585A7" d="M100 290l-8-5.098795V283l8 5.098795V290" />
                                <path id="Fill-502" fill="#3F7D9F" d="M100 294l-8-4.94277V284l8 4.94277V294" />
                                <path id="Fill-503" fill="#4585A7" d="M100 305l-16-9.662215V293l16 9.664572V305" />
                                <path id="Fill-504" fill="#3F7D9F" d="M100 310l-16-9.46726V296l16 9.46726V310" />
                                <path id="Fill-505" fill="#4585A7" d="M100 320l-15-8.413039V309l15 8.415206V320" />
                                <path id="Fill-506" fill="#3F7D9F" d="M100 325l-15-8.946137V312l15 8.943834V325" />
                                <path id="Fill-507" fill="#407EA0" d="M20 273.696V272l1.47.848-1.47.848" />
                                <g id="Group-510" transform="translate(19 272)">
                                    <mask id="mask-215" fill="#fff">
                                        <use xlinkHref="#path-214" />
                                    </mask>
                                    <path id="Fill-508" fill="url(#linearGradient-216)" mask="url(#mask-215)" d="M7.30575 9.3368l-6.435-3.6322V1.0714L2.5245.1386 7.30575 2.838v6.4988" />
                                </g>
                                <g id="Group-513" transform="translate(30 278)">
                                    <mask id="mask-218" fill="#fff">
                                        <use xlinkHref="#path-217" />
                                    </mask>
                                    <path id="Fill-511" fill="url(#linearGradient-219)" mask="url(#mask-218)" d="M10.6057143 12.8483333L.69028571 7.00566667v-6.895L15.408 8.786v1.2273333l-4.8022857 2.835" />
                                </g>
                                <path id="Fill-514" fill="#4585A7" d="M46.044 293.208L45 292.604l1.044-.604v1.208" />
                                <path id="Fill-515" fill="#4484A5" d="M44.7577344 293L41 290.856135 46 288v4.29008L44.7577344 293" />
                                <path id="Fill-516" fill="#3F7D9F" d="M58 345l-25-14.277633V324l25 14.277633V345" />
                                <path id="Fill-517" fill="#3F7D9F" d="M75 354l-10-5.463594V342l10 5.465806V354" />
                                <path d="M121.6256 215L118 212.808756V206l11 6.652074c-.2596-.016129-.517-.025346-.7722-.025346-1.6676 0-3.2604.352535-4.4506 1.073733L121.6256 215" id="Fill-518" fill="#407EA0" />
                                <g id="Group-521" transform="translate(121 212)">
                                    <mask id="mask-221" fill="#fff">
                                        <use xlinkHref="#path-220" />
                                    </mask>
                                    <path d="M27.2756154 17.4488889L.94138462 2.30222222l2.1816923-1.25333333C4.32992308.35333333 5.945.01333333 7.63592308.01333333c.25876923 0 .51976923.0088889.783.02444445L27.2756154 10.8844444v6.5644445" id="Fill-519" fill="url(#linearGradient-222)" mask="url(#mask-221)" />
                                </g>
                                <g id="Group-524" transform="translate(152 226)">
                                    <mask id="mask-224" fill="#fff">
                                        <use xlinkHref="#path-223" />
                                    </mask>
                                    <path id="Fill-522" fill="url(#linearGradient-225)" mask="url(#mask-224)" d="M11.9606667 13.3657143L.66033333 6.97485714V.22057143L11.9606667 6.61371429v6.75200001" />
                                </g>
                                <g id="Group-527" transform="translate(168 235)">
                                    <mask id="mask-227" fill="#fff">
                                        <use xlinkHref="#path-226" />
                                    </mask>
                                    <path id="Fill-525" fill="url(#linearGradient-228)" mask="url(#mask-227)" d="M7.81425 11.5346667L.4095 7.10133333V.20866667L7.81425 4.642v6.8926667" />
                                </g>
                                <g id="Group-530" transform="translate(117 220)">
                                    <mask id="mask-230" fill="#fff">
                                        <use xlinkHref="#path-229" />
                                    </mask>
                                    <path id="Fill-528" fill="url(#linearGradient-231)" mask="url(#mask-230)" d="M17.0088889 16.911L.72 7.389V.74025l16.2888889 9.52425v6.6465" />
                                </g>
                                <g id="Group-533" transform="translate(139 233)">
                                    <mask id="mask-233" fill="#fff">
                                        <use xlinkHref="#path-232" />
                                    </mask>
                                    <path id="Fill-531" fill="url(#linearGradient-234)" mask="url(#mask-233)" d="M21.0289 18.7533333L.368 7.22888889V.66222222L21.0289 12.1888889v6.5644444" />
                                </g>
                                <g id="Group-536" transform="translate(164 248)">
                                    <mask id="mask-236" fill="#fff">
                                        <use xlinkHref="#path-235" />
                                    </mask>
                                    <path id="Fill-534" fill="url(#linearGradient-237)" mask="url(#mask-236)" d="M7.8525 10.9472l-7.407-4.18V.2662l7.407 4.1822v6.4988" />
                                </g>
                                <g id="Group-539" transform="translate(175 254)">
                                    <mask id="mask-239" fill="#fff">
                                        <use xlinkHref="#path-238" />
                                    </mask>
                                    <path id="Fill-537" fill="url(#linearGradient-240)" mask="url(#mask-239)" d="M8.0505 10.8108L.6435 6.6286V.1298l7.407 4.18v6.501" />
                                </g>
                                <g id="Group-542" transform="translate(117 236)">
                                    <mask id="mask-242" fill="#fff">
                                        <use xlinkHref="#path-241" />
                                    </mask>
                                    <path id="Fill-540" fill="url(#linearGradient-243)" mask="url(#mask-242)" d="M12.8925714 13.9314286L.76914286 6.93257143V.17828571L12.8925714 7.17942857v6.75200003" />
                                </g>
                                <g id="Group-545" transform="translate(134 245)">
                                    <mask id="mask-245" fill="#fff">
                                        <use xlinkHref="#path-244" />
                                    </mask>
                                    <path id="Fill-543" fill="url(#linearGradient-246)" mask="url(#mask-245)" d="M4.865 9.5216L.3325 7.2204V.7194L4.865 3.0228v6.4988" />
                                </g>
                                <g id="Group-548" transform="translate(143 251)">
                                    <mask id="mask-248" fill="#fff">
                                        <use xlinkHref="#path-247" />
                                    </mask>
                                    <path id="Fill-546" fill="url(#linearGradient-249)" mask="url(#mask-248)" d="M7.40925 11.635l-7.407-4.43333333v-6.895l7.407 4.43566666V11.635" />
                                </g>
                                <g id="Group-551" transform="translate(117 251)">
                                    <mask id="mask-251" fill="#fff">
                                        <use xlinkHref="#path-250" />
                                    </mask>
                                    <path id="Fill-549" fill="url(#linearGradient-252)" mask="url(#mask-251)" d="M44.5452381 32.939L.73228571 7.5095V.86075L44.5452381 26.2925v6.6465" />
                                </g>
                                <g id="Group-554" transform="translate(166 279)">
                                    <mask id="mask-254" fill="#fff">
                                        <use xlinkHref="#path-253" />
                                    </mask>
                                    <path id="Fill-552" fill="url(#linearGradient-255)" mask="url(#mask-254)" d="M12.2476667 13.8697143L.94733333 7.47657143V.72228571L12.2476667 7.11542857v6.75428573" />
                                </g>
                                <g id="Group-557" transform="translate(117 267)">
                                    <mask id="mask-257" fill="#fff">
                                        <use xlinkHref="#path-256" />
                                    </mask>
                                    <path id="Fill-555" fill="url(#linearGradient-258)" mask="url(#mask-257)" d="M12.8925714 14.0697143L.76914286 7.07085714V.31657143L12.8925714 7.31771429v6.75200001" />
                                </g>
                                <g id="Group-560" transform="translate(134 276)">
                                    <mask id="mask-260" fill="#fff">
                                        <use xlinkHref="#path-259" />
                                    </mask>
                                    <path id="Fill-558" fill="url(#linearGradient-261)" mask="url(#mask-260)" d="M23.9204545 21.4917L.30227273 7.694V.8975l23.61818177 13.8v6.7942" />
                                </g>
                                <g id="Group-563" transform="translate(163 293)">
                                    <mask id="mask-263" fill="#fff">
                                        <use xlinkHref="#path-262" />
                                    </mask>
                                    <path id="Fill-561" fill="url(#linearGradient-264)" mask="url(#mask-263)" d="M7.712 10.7052l-7.407-4.18V.0264l7.407 4.18v6.4988" />
                                </g>
                                <g id="Group-566" transform="translate(117 281)">
                                    <mask id="mask-266" fill="#fff">
                                        <use xlinkHref="#path-265" />
                                    </mask>
                                    <path id="Fill-564" fill="url(#linearGradient-267)" mask="url(#mask-266)" d="M25.1585 19.7977778L.7415 5.87333333V.72222222l24.417 13.92444448v5.1511111" />
                                </g>
                                <path id="Fill-567" fill="#4484A5" d="M143 303l-25-14.523327V287l25 14.525645V303" />
                                <g id="Group-570" transform="translate(147 298)">
                                    <mask id="mask-269" fill="#fff">
                                        <use xlinkHref="#path-268" />
                                    </mask>
                                    <path id="Fill-568" fill="url(#linearGradient-270)" mask="url(#mask-269)" d="M17.9533333 16.1585L.51333333 5.96375V.74825L17.9533333 10.943v5.2155" />
                                </g>
                                <path id="Fill-571" fill="#4484A5" d="M165 316l-18-10.520898V304l18 10.520898V316" />
                                <g id="Group-574" transform="translate(169 312)">
                                    <mask id="mask-272" fill="#fff">
                                        <use xlinkHref="#path-271" />
                                    </mask>
                                    <path id="Fill-572" fill="url(#linearGradient-273)" mask="url(#mask-272)" d="M12.7386667 12.7083333L.36266667 5.56366667V.155L12.7386667 7.29966667v5.40866663" />
                                </g>
                                <path id="Fill-575" fill="#4484A5" d="M182 325l-12-6.624121V317l12 6.624121V325" />
                                <path id="Fill-576" fill="#4585A7" d="M126 304l-8-4.90139V297l8 4.90139V304" />
                                <path id="Fill-577" fill="#3F7D9F" d="M126 309l-8-4.572389V300l8 4.572389V309" />
                                <path id="Fill-578" fill="#4585A7" d="M142 313l-11-6.0443V305l11 6.0443V313" />
                                <path id="Fill-579" fill="#3F7D9F" d="M142 318l-11-6.346678V307l11 6.348948V318" />
                                <path id="Fill-580" fill="#4585A7" d="M165 326l-18-9.991131V314l18 9.991131V326" />
                                <path id="Fill-581" fill="#3F7D9F" d="M165 331l-18-10.311213V316l18 10.311213V331" />
                                <path id="Fill-582" fill="#4585A7" d="M143 330l-25-14.518314V313l25 14.518314V330" />
                                <path id="Fill-583" fill="#3F7D9F" d="M143 334l-25-14.786649V315l25 14.786649V334" />
                                <path id="Fill-584" fill="#4585A7" d="M172 346l-24-13.533491V330l24 13.533491V346" />
                                <path id="Fill-585" fill="#3F7D9F" d="M172 351l-24-13.80053V333l24 13.802803V351" />
                                <path id="Fill-586" fill="#4585A7" d="M183 353l-7-4.42387V346l7 4.421543V353" />
                                <path id="Fill-587" fill="#3F7D9F" d="M183 357l-7-4.055496V349l7 4.057631V357" />
                                <path id="Fill-588" fill="#4585A7" d="M195 360l-7-4.423013V353l7 4.423013V360" />
                                <path id="Fill-589" fill="#3F7D9F" d="M195 364l-7-4.056579V356l7 4.056579V364" />
                                <path id="Fill-590" fill="#4585A7" d="M133 340l-15-8.972848V328l15 8.975159V340" />
                                <path id="Fill-591" fill="#3F7D9F" d="M133 343l-15-8.429088V331l15 8.429088V343" />
                                <g id="Group-594" transform="translate(196 251)">
                                    <mask id="mask-275" fill="#fff">
                                        <use xlinkHref="#path-274" />
                                    </mask>
                                    <path id="Fill-592" fill="url(#linearGradient-276)" mask="url(#mask-275)" d="M21.9103 19.8058L.4559 7.4203V.6238l21.4544 12.3878v6.7942" />
                                </g>
                                <g id="Group-597" transform="translate(201 269)">
                                    <mask id="mask-278" fill="#fff">
                                        <use xlinkHref="#path-277" />
                                    </mask>
                                    <path id="Fill-595" fill="url(#linearGradient-279)" mask="url(#mask-278)" d="M13.19075 14.6365714L.41975 7.144V.392l16.4925 9.6731429v2.3885714l-3.7215 2.1828571" />
                                </g>
                                <g id="Group-600" transform="translate(216 283)">
                                    <mask id="mask-281" fill="#fff">
                                        <use xlinkHref="#path-280" />
                                    </mask>
                                    <path id="Fill-598" fill="url(#linearGradient-282)" mask="url(#mask-281)" d="M2.4025 2.4875L.3125 1.28l2.09-1.2075v2.415" />
                                </g>
                                <path id="Fill-601" fill="#4484A5" d="M215.978235 284L214 283.009116 218 281v1.983871L215.978235 284" />
                                <g id="Group-604" transform="translate(205 287)">
                                    <mask id="mask-284" fill="#fff">
                                        <use xlinkHref="#path-283" />
                                    </mask>
                                    <path id="Fill-602" fill="url(#linearGradient-285)" mask="url(#mask-284)" d="M.6425 1.37V.32l.91.525-.91.525" />
                                </g>
                                <g id="Group-607" transform="translate(205 288)">
                                    <mask id="mask-287" fill="#fff">
                                        <use xlinkHref="#path-286" />
                                    </mask>
                                    <path id="Fill-605" fill="url(#linearGradient-288)" mask="url(#mask-287)" d="M12.909 12.936L.533 5.79133333v-3.71L3.28866667.49 12.909 6.04333333V12.936" />
                                </g>
                                <path id="Fill-608" fill="#4484A5" d="M206 291v-2.454073L206.92464 288 209 289.227036 206 291" />
                                <g id="Group-611" transform="translate(200 298)">
                                    <mask id="mask-290" fill="#fff">
                                        <use xlinkHref="#path-289" />
                                    </mask>
                                    <path id="Fill-609" fill="url(#linearGradient-291)" mask="url(#mask-290)" d="M17.91225 17.4288889L.5535 7.53111111V.96666667l17.35875 9.89777773v6.5644445" />
                                </g>
                                <g id="Group-614" transform="translate(205 318)">
                                    <mask id="mask-293" fill="#fff">
                                        <use xlinkHref="#path-292" />
                                    </mask>
                                    <path id="Fill-612" fill="url(#linearGradient-294)" mask="url(#mask-293)" d="M12.909 13.8102857L.533 6.81142857v-6.752l12.376 6.99885714v6.75199999" />
                                </g>
                                <g id="Group-617" transform="translate(202 331)">
                                    <mask id="mask-296" fill="#fff">
                                        <use xlinkHref="#path-295" />
                                    </mask>
                                    <path id="Fill-615" fill="url(#linearGradient-297)" mask="url(#mask-296)" d="M15.9108571 14.09875L.53485714 5.35975V.14425l15.37599996 8.739v5.2155" />
                                </g>
                                <path id="Fill-618" fill="#4484A5" d="M218 346l-15-8.590708V336l15 8.59292V346" />
                                <path id="Fill-619" fill="#4585A7" d="M218 357l-8-4.903012V350l8 4.903012V357" />
                                <path id="Fill-620" fill="#3F7D9F" d="M218 361l-8-4.572389V352l8 4.572389V361" />
                                <path id="Fill-621" fill="#4585A7" d="M218 373l-16-9.447005V361l16 9.449309V373" />
                                <path id="Fill-622" fill="#3F7D9F" d="M218 377l-16-8.962502V364l16 8.962502V377" />
                                <path id="Fill-623" fill="#4585A7" d="M218 389l-15-8.972848V377l15 8.975159V389" />
                                <path id="Fill-624" fill="#3F7D9F" d="M218 392l-15-8.429088V380l15 8.429088V392" />
                                <path id="Fill-625" fill="#4585A7" d="M144 346l-6-3.904392V339l6 3.904392V346" />
                                <path id="Fill-626" fill="#3F7D9F" d="M144 349l-6-3.507431V342l6 3.505308V349" />
                                <path id="Fill-627" fill="#4585A7" d="M164 357l-15-8.135667V346l15 8.133479V357" />
                                <path id="Fill-628" fill="#3F7D9F" d="M164 361l-15-8.319224V349l15 8.319224V361" />
                                <path id="Fill-629" fill="#3F7D9F" d="M176 412l-25-14.275358V391l25 14.277633V412" />
                                <path id="Fill-630" fill="#3F7D9F" d="M193 422l-10-5.464799V410l10 5.464799V422" />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            </div>
        );
    };
}