const todoData = {
    "network_fundamentals": {
      "title": "Network Temelleri ve Tarihçesi",
      "sections": {
        "introduction": {
          "title": "Giriş ve Temel Kavramlar",
          "items": [
            {
              "id": "network-purpose",
              "text": "Network'ün Amacı",
              "description": "İki bilgisayarın ortak bir dil (protokol) aracılığıyla haberleşmesini sağlamak.",
            },
            {
              "id": "old-protocols",
              "text": "Eski Protokoller",
              "description": "DECNET, AppleTalk, IPX/SPX, Banyan VINES gibi eski ve artık yaygın olarak kullanılmayan protokoller.",
              "subItems": [
                {"id": "decnet", "text": "DECNET"},
                {"id": "appletalk", "text": "AppleTalk"},
                {"id": "ipx-spx", "text": "IPX/SPX"},
                {"id": "banyan-vines", "text": "Banyan VINES"}
              ]
            },
            {
              "id": "current-protocol",
              "text": "Günümüzdeki Hakim Protokol",
              "description": "TCP/IP (Transmission Control Protocol/Internet Protocol)",
            },
            {
              "id": "circuit-vs-packet",
              "text": "Devre Anahtarlamalı (Circuit Switching) vs. Paket Anahtarlamalı (Packet Switching)",
              "description": "İki temel iletişim yöntemi. Devre anahtarlamada, iletişim için özel bir yol kurulurken, paket anahtarlamada veri küçük paketlere bölünerek farklı yollardan gönderilir.",
              "subItems": [
                {
                  "id": "circuit-switching",
                  "text": "Devre Anahtarlamalı İletişim",
                  "description": "İletişim başlamadan önce, kaynak ve hedef arasında fiziksel bir devre kurulur. Bu devre, iletişim süresince ayrılmış olarak kalır. (Örn: Geleneksel telefon ağları)"
                },
                {
                  "id": "packet-switching",
                  "text": "Paket Anahtarlamalı İletişim",
                  "description": "Veri, 'paket' adı verilen küçük parçalara bölünür. Her paket, başlık bilgisi (hedef adresi vb.) içerir ve ağ üzerinde birbirinden bağımsız olarak yönlendirilir. (Örn: İnternet)"
                }
              ]
            }
          ]
        },
        "arpanet": {
          "title": "ARPANET (İnternetin Kökeni)",
          "items": [
            {
              "id": "arpanet-origin",
              "text": "ARPANET'in Kuruluşu",
              "description": "ABD Savunma Bakanlığı'nın (DoD) veri iletişimi ihtiyacını karşılamak için tasarlandı.",
            },
            {
              "id": "arpa-role",
              "text": "ARPA'nın Rolü",
              "description": "Advanced Research Projects Agency (ARPA), üniversitelerle veri alışverişi için üreticiden bağımsız bir protokol geliştirmeye başladı.",
            },
            {
              "id": "arpanet-first-packet-switched",
              "text": "İlk Paket Anahtarlamalı Ağ",
              "description": "ARPANET, internet tarihindeki ilk paket anahtarlamalı ağdır.",
            },
            {
              "id": "arpanet-growth",
              "text": "ARPANET'in Büyümesi",
              "description": "Mart 1970'te 1 düğüm (node) ile başladı, Eylül 1971'de 18 düğüm, Temmuz 1975'te İngiltere ve Norveç bağlantıları dahil 57 düğüm.",
            }
          ]
        },
        "osi_tcpip": {
          "title": "OSI ve TCP/IP Modelleri",
          "items": [
            {
              "id": "osi-model",
              "text": "OSI Modeli (Open Systems Interconnection)",
              "description": "ISO (International Organization for Standardization) tarafından geliştirilen, farklı bilgisayar sistemlerinin bir ağ üzerinden nasıl iletişim kuracağını açıklayan bir referans modeli.",
              "subItems":[
                  {
                    "id": "osi-layers",
                    "text":"OSI Katmanları",
                    "description":"Fiziksel, Veri Bağlantısı, Ağ, Taşıma, Oturum, Sunum, Uygulama",
                    "subItems":[
                      {"id":"osi-physical", "text":"Fiziksel Katman (Physical)"},
                      {"id":"osi-data-link", "text":"Veri Bağlantısı Katmanı (Data Link)"},
                      {"id":"osi-network", "text":"Ağ Katmanı (Network)"},
                      {"id":"osi-transport", "text":"Taşıma Katmanı (Transport)"},
                      {"id":"osi-session", "text":"Oturum Katmanı (Session)"},
                      {"id":"osi-presentation", "text":"Sunum Katmanı (Presentation)"},
                      {"id":"osi-application", "text":"Uygulama Katmanı (Application)"},
  
                    ]
                  }
  
              ]
            },
            {
              "id": "tcpip-model",
              "text": "TCP/IP Modeli",
              "description": "İnternetin temelini oluşturan protokol takımı. OSI modeline göre daha basit ve pratiktir.",
              "subItems":[
                {
                  "id":"tcpip-layers",
                  "text":"TCP/IP Katmanları",
                  "description":"Uygulama, Taşıma, İnternet, Ağ Arayüzü",
                  "subItems":[
                    {"id":"tcpip-application", "text":"Uygulama Katmanı (Application)"},
                    {"id":"tcpip-transport", "text":"Taşıma Katmanı (Transport)"},
                    {"id":"tcpip-internet", "text":"İnternet Katmanı (Internet)"},
                    {"id":"tcpip-network-access", "text":"Ağ Erişim Katmanı (Network Access)"}
                  ]
                }
              ]
            },
            {
              "id": "tcpip-protocol-suite",
              "text": "TCP/IP Protokol Takımı",
              "description": "HTTP, SMTP, Telnet, FTP, DNS, RIP, SNMP gibi protokolleri içeren bir bütün.",
               "subItems":[
                      {"id":"tcpip-http", "text":"HTTP"},
                      {"id":"tcpip-smtp", "text":"SMTP"},
                      {"id":"tcpip-telnet", "text":"Telnet"},
                      {"id":"tcpip-ftp", "text":"FTP"},
                      {"id":"tcpip-dns", "text":"DNS"},
                      {"id":"tcpip-rip", "text":"RIP"},
                      {"id":"tcpip-snmp", "text":"SNMP"},
                      {"id":"tcpip-udp", "text":"UDP"},
                      {"id":"tcpip-tcp", "text":"TCP"},
                      {"id":"tcpip-arp", "text":"ARP"},
                      {"id":"tcpip-ip", "text":"IP"},
                      {"id":"tcpip-igmp", "text":"IGMP"},
                      {"id":"tcpip-icmp", "text":"ICMP"},
                      {"id":"tcpip-ethernet", "text":"Ethernet"},
                      {"id":"tcpip-token-ring", "text":"Token Ring"},
                      {"id":"tcpip-atm", "text":"ATM"},
                      {"id":"tcpip-frame-relay", "text":"Frame Relay"},
  
               ]
            }
          ]
        },
         "encapsulation_decapsulation": {
          "title": "Encapsulation (Kapsülleme) ve Decapsulation (Kapsülden Çıkarma)",
          "items": [
            {
              "id": "encapsulation-process",
              "text": "Kapsülleme İşlemi",
              "description": "Verinin, her katmanda başlık (header) ve bazen kuyruk (trailer) bilgileri eklenerek bir alt katmana iletilmesi.",
            },
            {
              "id": "decapsulation-process",
              "text": "Kapsülden Çıkarma İşlemi",
              "description": "Alıcı tarafta, her katmanda başlık ve kuyruk bilgilerinin kaldırılarak verinin bir üst katmana iletilmesi.",
            },
            {
              "id":"encapsulation-example",
              "text":"Kapsülleme Örneği",
              "description":"Verinin Uygulama katmanından başlayıp Fiziksel katman kadar sırayla, Data, Segment, Packet, Frame, Bits olarak kapsüllenmesi."
            },
            {
              "id":"decapsulation-example",
              "text":"Dekapsülleme Örneği",
              "description":"Bits olarak alınan verinin Fiziksel katman'dan Uygulama katmanına kadar Frame, Packet, Segment ve Data olarak verinin ayıklanması."
            }
          ]
        },
        "layer1":{
          "title":"Fiziksel Katman (Layer 1)",
          "items":[
            {
              "id":"physical-layer-intro",
              "text":"Fiziksel Katman Hakkında",
              "description":"Bu katman, verinin fiziksel ortam üzerinden (kablo, fiber optik, kablosuz sinyaller) nasıl iletileceğini tanımlar. Bit'lerin (0 ve 1'ler) voltaj seviyeleri, sinyal zamanlaması gibi konular bu katmanda ele alınır."
            },
            {
              "id":"twisted-pair",
              "text":"Twisted Pair (Bükümlü Çift) Kablolar",
              "description":"En yaygın kullanılan kablo türlerinden biridir.  Birbirine bükülmüş tel çiftlerinden oluşur. Bükülme, elektromanyetik girişimi azaltmaya yardımcı olur.",
              "subItems":[
                {
                  "id":"utp",
                  "text":"UTP (Unshielded Twisted Pair)",
                  "description":"Korumasız bükümlü çift. Daha ucuz, daha esnek, ancak gürültüye daha duyarlı."
                },
                 {
                  "id":"stp",
                  "text":"STP (Shielded Twisted Pair)",
                  "description":"Korumalı bükümlü çift. Daha pahalı, daha az esnek, ancak gürültüye karşı daha dayanıklı."
                }
  
              ]
            },
            {
              "id":"fiber-optic",
              "text":"Fiber Optik Kablolar",
              "description":"Veriyi ışık sinyalleriyle ileten kablolardır. Çok yüksek bant genişliği ve uzun mesafe iletimi sağlar. Elektromanyetik girişimden etkilenmezler.",
               "subItems":[
                {
                  "id":"fiber-components",
                  "text":"Fiber Optik Kablo Bileşenleri",
                  "description":"Çekirdek (Core), Kaplama (Cladding), Koruyucu Kaplama (Coating), Güçlendirici Eleman (Strength Member), Dış Kılıf (Outer Jacket)."
                }
               ]
            }
  
          ]
        },
         "layer2":{
          "title":"Veri Bağlantı Katmanı (Layer 2)",
          "items":[
              {
                "id":"data-link-functions",
                "text":"Veri Bağlantı Katmanı Görevleri",
                "description":"Fiziksel katmandan gelen bit akışını 'frame' (çerçeve) adı verilen mantıksal birimlere dönüştürmek ve bu frame'leri hatasız bir şekilde iletmek.  Hata kontrolü, akış kontrolü ve ortam erişim kontrolü gibi işlevleri yerine getirir."
              },
              {
                "id":"mac-address",
                "text":"MAC Adresi (Media Access Control Address)",
                "description":"Cihazların ağ arayüz kartlarına (NIC) üretici tarafından atanan, benzersiz, 48 bitlik fiziksel adres.  Veri bağlantı katmanında, frame'lerin doğru hedefe ulaşmasını sağlar.",
                              "subItems": [
                {
                  "id": "mac-address-structure",
                  "text": "MAC Adresi Yapısı",
                  "description": "48 bit uzunluğunda, 12 hexadecimal karakterle ifade edilir (örn. 00:1A:2B:3C:4D:5E). İlk 24 bit, üreticiyi (OUI - Organizationally Unique Identifier) tanımlar ve IANA tarafından atanır. Son 24 bit, üretici tarafından cihaza özgü olarak atanır."
                },
                {
                  "id": "mac-address-example",
                  "text": "MAC Adresi Örnekleri",
                  "description": "7910.4567.abcd, 12-12-AA-BC-DE-FC, AB:CD:EF:12:34:56"
                },
                 {
                  "id": "mac-address-finding",
                  "text": "MAC Adresi Nasıl Bulunur?",
                  "description": "Windows'ta `ipconfig /all` komutu ile."
                }
              ]
            },
            {
              "id": "arp-protocol",
              "text": "ARP (Address Resolution Protocol)",
              "description": "Bir IP adresinin karşılık geldiği MAC adresini bulmak için kullanılan protokol.",
              "subItems": [
                {
                  "id": "arp-request",
                  "text": "ARP Request",
                  "description": "Bir cihaz, hedef IP adresinin MAC adresini öğrenmek için ağa bir ARP Request (ARP İsteği) yayını yapar. Bu yayın, ağdaki tüm cihazlara gönderilir (broadcast)."
                },
                {
                  "id": "arp-reply",
                  "text": "ARP Reply",
                  "description": "Hedef IP adresine sahip olan cihaz, kendi MAC adresini içeren bir ARP Reply (ARP Yanıtı) mesajı ile cevap verir."
                },
                {
                  "id": "arp-opcode",
                  "text":"ARP Opcode",
                  "description":"ARP Request için OPCODE 1 kullanılır ve Hedef MAC adresi FFFF-FFFF-FFFF olur."
                },
                 {
                  "id": "arp-cache",
                  "text": "ARP Önbelleği (ARP Cache)",
                  "description": "Cihazlar, öğrendikleri IP-MAC adresi eşleşmelerini bir süre boyunca ARP önbelleğinde tutar.  Bu, her iletişim için tekrar tekrar ARP sorgusu yapılmasını engeller. (`arp -a` komutu ile görüntülenebilir)"
                }
              ]
            },
             {
              "id": "ethernet-switch",
              "text": "Ethernet Switch (Anahtar)",
              "description": "Veri bağlantı katmanında çalışan, ağ cihazlarını birbirine bağlayan ve frame'leri MAC adreslerine göre doğru portlara yönlendiren cihaz.",
              "subItems": [
                {
                  "id": "switch-operation",
                  "text": "Switch Çalışma Prensibi",
                  "description": "Switch, bağlı olduğu cihazların MAC adreslerini öğrenir ve bir MAC adres tablosu (CAM tablosu) oluşturur.  Gelen frame'leri, hedef MAC adresine göre ilgili porta yönlendirir.  Bu, collision (çarpışma) olasılığını azaltır ve ağ performansını artırır."
                },
                 {
                  "id": "mac-address-table",
                  "text": "MAC Adres Tablosu (CAM Table)",
                  "description": "Switch'in, hangi portta hangi MAC adresinin bulunduğunu tuttuğu tablo."
                }
              ]
            }
        ]
      },
       "layer3":{
        "title":"Ağ Katmanı (Layer 3)",
        "items":[
          {
            "id":"network-layer-intro",
            "text":"Ağ Katmanı Hakkında",
            "description":"Veri paketlerinin (datagram) kaynak cihazdan hedef cihaza, farklı ağlar üzerinden yönlendirilmesini (routing) sağlar.  IP (Internet Protocol) bu katmanın temel protokolüdür."
          },
          {
            "id":"ip-protocol",
            "text":"IP (Internet Protocol)",
            "description":"Ağ katmanının temel protokolüdür. Paketlerin yönlendirilmesi, adresleme ve paketlerin parçalanması/birleştirilmesi gibi işlevleri yerine getirir. 'Best effort' (en iyi çaba) prensibiyle çalışır; paketlerin hedefe ulaşması garanti edilmez.",
             "subItems":[
               {
                "id":"ip-addressing",
                "text":"IP Adresleme",
                "description":"İnternete bağlanan her cihaza, mantıksal bir adres (IP adresi) atanır. IP adresleri, cihazların ağ üzerindeki konumunu belirler ve yönlendirme işleminin temelini oluşturur."
               }
             ]
          },
          {
            "id":"ipv4",
            "text":"IPv4 (Internet Protocol version 4)",
            "description":"En yaygın kullanılan IP adresleme standardı. 32 bitlik adresler kullanır (örn. 192.168.1.1).",
            "subItems":[
              {
                "id":"ipv4-address-classes",
                "text":"IPv4 Adres Sınıfları",
                "description":"A, B, C, D ve E sınıfları. Her sınıfın farklı bir adres aralığı ve ağ/host bit sayısı vardır.",
                "subItems":[
                  {"id":"class-a", "text":"Class A (0.0.0.0 - 127.255.255.255, subnet mask 255.0.0.0)"},
                  {"id":"class-b", "text":"Class B (128.0.0.0 - 191.255.255.255, subnet mask 255.255.0.0)"},
                  {"id":"class-c", "text":"Class C (192.0.0.0 - 223.255.255.255, subnet mask 255.255.255.0)"},
                  {"id":"class-d", "text":"Class D (224.0.0.0 - 239.255.255.255, Multicast için)"},
                  {"id":"class-e", "text":"Class E (240.0.0.0 - 255.255.255.255, Deneysel)"}
                ]
              },
              {
                "id":"private-ip-addresses",
                "text":"Özel (Private) IP Adresleri",
                "description":"Yerel ağlarda (LAN) kullanılan, internete doğrudan erişimi olmayan IP adresleri. (10.0.0.0 - 10.255.255.255, 172.16.0.0 - 172.31.255.255, 192.168.0.0 - 192.168.255.255)",
                 "subItems":[
                    {"id":"private-ip-range-10", "text":"10.0.0.0 - 10.255.255.255"},
                    {"id":"private-ip-range-172", "text":"172.16.0.0 - 172.31.255.255"},
                    {"id":"private-ip-range-192", "text":"192.168.0.0 - 192.168.255.255"}
                 ]
              },
              {
                "id":"classful-ipv4",
                "text":"Classful IPv4",
                "description":"IP adreslerinin sınıflara ayrıldığı (A, B, C) eski bir adresleme yöntemi.  Günümüzde yerini Classless (sınıfsız) adreslemeye bırakmıştır."
              },
               {
                "id":"classless-ipv4",
                "text":"Classless IPv4 (CIDR - Classless Inter-Domain Routing)",
                "description":"Subnet mask (alt ağ maskesi) kullanarak IP adreslerini daha esnek bir şekilde bölümlere ayırmaya olanak tanıyan adresleme yöntemi.  Örn. 192.168.1.0/24 (buradaki /24, subnet mask'i belirtir)",
                "subItems":[
                  {
                    "id":"subnet-mask-examples",
                    "text":"Subnet Mask Örnekleri ve Gösterimleri",
                    "description":"255.255.0.0 = /16, 255.255.255.128 = /25, 255.255.192.0 = /18"
                  }
                ]
              }
            ]
          },
          {
            "id":"ipv6",
            "text":"IPv6 (Internet Protocol version 6)",
            "description":"IPv4 adreslerinin tükenmesi sorununa çözüm olarak geliştirilen yeni nesil IP adresleme standardı. 128 bitlik adresler kullanır (örn. 2001:0db8:85a3:0000:0000:8a2e:0370:7334).",
             "subItems":[
               {
                  "id": "ipv6-structure",
                  "text": "IPv6 Adres Yapısı",
                  "description": "128 bit, 8 grup 16 bitlik hexadecimal sayı (örn., 2001:0DB8:0000:0000:02AA:00FF:FE28:9C5A).  Kısaltma kuralları vardır (örn., 2001:0DB8::2AA:00FF:FE28:9C5A)."
                }
             ]
          },
          {
            "id":"routing",
            "text":"Routing (Yönlendirme)",
            "description":"Paketlerin, kaynak cihazdan hedef cihaza ulaşması için izlemesi gereken yolun belirlenmesi işlemi.  Router (yönlendirici) adı verilen cihazlar tarafından yapılır.",
            "subItems":[
              {
                "id":"routing-methods",
                "text":"Routing Yöntemleri",
                "description":"Connected (Doğrudan Bağlı), Static Routing (Statik Yönlendirme), Dynamic Routing (Dinamik Yönlendirme)",
                "subItems":[
                  {"id":"connected-routing","text":"Connected (Doğrudan Bağlı)"},
                  {"id":"static-routing","text":"Static Routing (Statik Yönlendirme)", "description":"Yönlendirme tablolarının elle (manuel olarak) yapılandırıldığı yöntem."},
                  {"id":"dynamic-routing","text":"Dynamic Routing (Dinamik Yönlendirme)", "description":"Yönlendirme tablolarının, yönlendirme protokolleri (RIP, OSPF, EIGRP, BGP) tarafından otomatik olarak oluşturulduğu ve güncellendiği yöntem."}
                ]
              },
              {
                "id":"routing-protocols",
                "text":"Routing Protokolleri",
                "description":"RIP, OSPF, EIGRP, IS-IS, BGP",
                 "subItems":[
                    {"id":"rip","text":"RIP (Routing Information Protocol)"},
                    {"id":"ospf","text":"OSPF (Open Shortest Path First)"},
                    {"id":"eigrp","text":"EIGRP (Enhanced Interior Gateway Routing Protocol)"},
                    {"id":"is-is","text":"IS-IS (Intermediate System to Intermediate System)"},
                    {"id":"bgp","text":"BGP (Border Gateway Protocol)"}
                 ]
              },
              {
                "id":"redundant-topology",
                "text":"Redundant (Yedekli) Topoloji",
                "description":"Ağda, bir bileşenin arızalanması durumunda iletişimin kesilmemesi için yedekli yollar ve cihazlar kullanılması.",
                "subItems":[
                  {"id":"redundancy-protocols", "text":"Redundancy (Yedeklilik) Protokolleri", "description":"HSRP (Hot Standby Router Protocol), VRRP (Virtual Router Redundancy Protocol), GLBP (Gateway Load Balancing Protocol), LACP (Link Aggregation Control Protocol), mLAG (Multi-Chassis Link Aggregation Group), vPC (virtual Port Channel)"}
                ]
              }
            ]
          }
        ]
      },
      "layer4":{
        "title":"Taşıma Katmanı (Layer 4)",
        "items":[
           {
            "id":"transport-layer-intro",
            "text":"Taşıma Katmanı Hakkında",
            "description":"Uygulama katmanındaki süreçler (process) arasında mantıksal iletişim sağlar. Verinin uçtan uca güvenilir (reliable) veya güvenilir olmayan (unreliable) bir şekilde iletilmesinden sorumludur."
          },
          {
            "id":"tcp",
            "text":"TCP (Transmission Control Protocol)",
            "description":"Bağlantı yönelimli (connection-oriented), güvenilir bir iletim protokolüdür. Veri bütünlüğünü, sıralı iletimi ve akış kontrolünü sağlar.",
            "subItems":[
              {
                "id":"tcp-3-way-handshake",
                "text":"TCP 3-Way Handshake (Üçlü El Sıkışma)",
                "description":"TCP bağlantısı kurulurken, istemci (client) ve sunucu (server) arasında gerçekleşen üç adımlı işlem (SYN, SYN-ACK, ACK)."
              },
              {
                "id":"tcp-retransmission",
                "text":"TCP Retransmission (Yeniden İletim)",
                "description":"Kayıp veya hatalı paketlerin, TCP tarafından otomatik olarak algılanıp yeniden gönderilmesi."
              },
              {
                "id":"tcp-flow-control",
                "text":"TCP Flow Control (Akış Kontrolü)",
                "description":"Alıcının (receiver) işleyebileceğinden daha fazla veri gönderilmesini engelleyen mekanizma. Alıcı, 'window' (pencere) boyutu ile göndericiyi bilgilendirir."
              }
            ]
          },
          {
            "id":"udp",
            "text":"UDP (User Datagram Protocol)",
            "description":"Bağlantısız (connectionless), güvenilir olmayan bir iletim protokolüdür.  TCP'ye göre daha hızlıdır, ancak veri bütünlüğü ve sıralı iletim garanti edilmez.  Genellikle gerçek zamanlı uygulamalarda (ses, video) kullanılır.",

          }
        ]
      },
      "layer7":{
        "title":"Uygulama Katmanı (Layer 7)",
        "items":[
          {
            "id":"application-layer-intro",
            "text":"Uygulama Katmanı Hakkında",
            "description":"Kullanıcıların ağ uygulamalarıyla (web tarayıcıları, e-posta istemcileri, vb.) etkileşim kurmasını sağlayan katmandır.  HTTP, SMTP, DNS, FTP gibi protokoller bu katmanda çalışır."
          },
          {
            "id":"well-known-ports",
            "text":"Well-Known Port Numaraları",
            "description":"Belirli uygulamaların kullandığı, standartlaştırılmış port numaraları (örn., HTTP: 80, HTTPS: 443, FTP: 20/21, SMTP: 25, DNS: 53).",
            "subItems":[
              {"id":"port-20-21", "text":"Port 20/21 (FTP): File Transfer Protocol"},
              {"id":"port-22", "text":"Port 22 (SSH): Secure SHell"},
              {"id":"port-23", "text":"Port 23 (Telnet): Telnet"},
              {"id":"port-25", "text":"Port 25 (SMTP): Simple Mail Transfer Protocol"},
              {"id":"port-53", "text":"Port 53 (DNS): Domain Name System"},
              {"id":"port-80", "text":"Port 80 (HTTP): Hypertext Transfer Protocol"},
              {"id":"port-110", "text":"Port 110 (POP3): Post Office Protocol version 3"},
              {"id":"port-123", "text":"Port 123 (NTP): Network Time Protocol"},
              {"id":"port-143", "text":"Port 143 (IMAP): Internet Message Access Protocol"},
              {"id":"port-161-162", "text":"Port 161/162 (SNMP): Simple Network Management Protocol"},
              {"id":"port-389", "text":"Port 389 (LDAP): Lightweight Directory Access Protocol"},
              {"id":"port-443", "text":"Port 443 (HTTPS): HTTP Secure"}
            ]
          },
           {
            "id":"dhcp",
            "text":"DHCP (Dynamic Host Configuration Protocol)",
            "description":"Ağdaki cihazlara otomatik olarak IP adresi, subnet mask, default gateway ve DNS sunucu bilgileri atayan protokol.",
            "subItems":[
              {"id":"dhcp-process","text":"DHCP İşlem Adımları", "description":"DHCPDiscover, DHCPOffer, DHCPRequest, DHCPAck"}
            ]
          },
          {
            "id":"dns",
            "text":"DNS (Domain Name System)",
            "description":"Alan adlarını (domain name) IP adreslerine çeviren sistem (örn., www.google.com -> 172.217.16.196).",
            "subItems":[
              {"id":"dns-records", "text":"DNS Kayıtları (DNS Records)", "description":"A, AAAA, CNAME, MX, NS, TXT gibi farklı türlerde DNS kayıtları bulunur.  Bu kayıtlar, alan adlarıyla ilgili bilgileri (IP adresi, mail sunucusu, vb.) tutar."}
            ]
          },
          {
            "id":"http-https",
            "text":"HTTP (Hypertext Transfer Protocol) ve HTTPS (HTTP Secure)",
            "description":"Web sayfalarının görüntülenmesini sağlayan protokoller.  HTTPS, HTTP'nin şifrelenmiş (encrypted) versiyonudur ve daha güvenlidir.  SSL/TLS sertifikaları kullanılır.",
             "subItems":[
               {"id":"ssl-tls","text":"SSL/TLS Sertifikaları", "description":"Web sitelerinin kimliğini doğrulayan ve iletişimi şifreleyen dijital sertifikalar.  Comodo, Symantec, GeoTrust, Digicert, IdenTrust gibi sertifika otoriteleri tarafından verilir."}
             ]
          }
        ]
      }
    }
  }
};