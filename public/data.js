const todoData = {
    "network_basics": {
        "title": "Ağ Temelleri ve Tarihçesi",
        "sections": {
            "network_history": {
                "title": "Ağ Tarihçesi ve Gelişimi",
                "items": [
                    {
                        "id": "early-protocols",
                        "text": "İlk Ağ Protokolleri",
                        "description": "İlk kullanılan ağ protokollerini öğren",
                        "subItems": [
                            {
                                "id": "decnet",
                                "text": "DECNET - Digital Equipment Corporation Network"
                            },
                            {
                                "id": "appletalk",
                                "text": "AppleTalk - Apple'ın ağ protokolü"
                            },
                            {
                                "id": "ipx-spx",
                                "text": "IPX/SPX - Novell'in ağ protokolü"
                            },
                            {
                                "id": "banyan-vines",
                                "text": "Banyan VINES"
                            }
                        ]
                    },
                    {
                        "id": "arpanet",
                        "text": "ARPANET ve İnternetin Doğuşu",
                        "description": "İnternetin temelini oluşturan ARPANET'i öğren",
                        "subItems": [
                            {
                                "id": "arpanet-history",
                                "text": "ARPANET'in kuruluş amacı ve gelişimi"
                            },
                            {
                                "id": "arpanet-growth",
                                "text": "1970-1975 arası büyüme ve uluslararası bağlantılar"
                            }
                        ]
                    }
                ]
            },
            "switching_methods": {
                "title": "Anahtarlama Yöntemleri",
                "items": [
                    {
                        "id": "circuit-switching",
                        "text": "Devre Anahtarlama (Circuit Switching)",
                        "description": "Devre anahtarlama prensiplerini öğren",
                        "subItems": [
                            {
                                "id": "circuit-characteristics",
                                "text": "Devre anahtarlamanın özellikleri ve kullanım alanları"
                            }
                        ]
                    },
                    {
                        "id": "packet-switching",
                        "text": "Paket Anahtarlama (Packet Switching)",
                        "description": "Paket anahtarlama prensiplerini öğren",
                        "subItems": [
                            {
                                "id": "packet-characteristics",
                                "text": "Paket anahtarlamanın özellikleri ve avantajları"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "osi_model": {
        "title": "OSI Modeli ve TCP/IP",
        "sections": {
            "physical_layer": {
                "title": "Fiziksel Katman (Layer 1)",
                "items": [
                    {
                        "id": "cable-types",
                        "text": "Kablo Tipleri",
                        "description": "Farklı ağ kablo tiplerini öğren",
                        "subItems": [
                            {
                                "id": "twisted-pair",
                                "text": "Twisted Pair kablolar ve özellikleri"
                            },
                            {
                                "id": "fiber-optic",
                                "text": "Fiber optik kablolar ve bileşenleri",
                                "description": "Core, Cladding, Coating, Strength Member, Outer Jacket yapısı"
                            }
                        ]
                    }
                ]
            },
            "data_link_layer": {
                "title": "Veri Bağlantı Katmanı (Layer 2)",
                "items": [
                    {
                        "id": "mac-addressing",
                        "text": "MAC Adresleme",
                        "description": "MAC adreslerinin yapısını ve özelliklerini öğren",
                        "subItems": [
                            {
                                "id": "mac-structure",
                                "text": "48-bit MAC adres yapısı ve IANA tahsisi"
                            },
                            {
                                "id": "mac-format",
                                "text": "HEX format ve örnek MAC adresleri"
                            }
                        ]
                    },
                    {
                        "id": "arp-protocol",
                        "text": "ARP Protokolü",
                        "description": "Address Resolution Protocol çalışma prensibi",
                        "subItems": [
                            {
                                "id": "arp-process",
                                "text": "ARP Request ve Reply mekanizması"
                            },
                            {
                                "id": "arp-cache",
                                "text": "ARP önbelleği ve yönetimi"
                            }
                        ]
                    }
                ]
            },
            "network_layer": {
                "title": "Ağ Katmanı (Layer 3)",
                "items": [
                    {
                        "id": "ip-addressing",
                        "text": "IP Adresleme",
                        "description": "IPv4 ve IPv6 adres sistemlerini öğren",
                        "subItems": [
                            {
                                "id": "ipv4-classes",
                                "text": "IPv4 adres sınıfları (A, B, C, D, E)"
                            },
                            {
                                "id": "private-addresses",
                                "text": "Özel IP adresleri ve kullanım alanları"
                            },
                            {
                                "id": "ipv6-structure",
                                "text": "IPv6 adres yapısı ve gösterimi"
                            }
                        ]
                    },
                    {
                        "id": "routing",
                        "text": "Yönlendirme (Routing)",
                        "description": "Ağ yönlendirme prensiplerini öğren",
                        "subItems": [
                            {
                                "id": "static-routing",
                                "text": "Statik yönlendirme"
                            },
                            {
                                "id": "dynamic-routing",
                                "text": "Dinamik yönlendirme protokolleri (RIP, OSPF, EIGRP, BGP)"
                            }
                        ]
                    }
                ]
            },
            "transport_layer": {
                "title": "Taşıma Katmanı (Layer 4)",
                "items": [
                    {
                        "id": "tcp-protocol",
                        "text": "TCP Protokolü",
                        "description": "TCP'nin çalışma prensiplerini öğren",
                        "subItems": [
                            {
                                "id": "tcp-handshake",
                                "text": "3-Way Handshake süreci"
                            },
                            {
                                "id": "tcp-flow-control",
                                "text": "Akış kontrolü mekanizması"
                            },
                            {
                                "id": "tcp-retransmission",
                                "text": "Yeniden iletim mekanizması"
                            }
                        ]
                    },
                    {
                        "id": "udp-protocol",
                        "text": "UDP Protokolü",
                        "description": "UDP'nin çalışma prensiplerini öğren",
                        "subItems": [
                            {
                                "id": "udp-characteristics",
                                "text": "UDP'nin özellikleri ve kullanım alanları"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "application_protocols": {
        "title": "Uygulama Katmanı Protokolleri",
        "sections": {
            "basic_protocols": {
                "title": "Temel Uygulama Protokolleri",
                "items": [
                    {
                        "id": "dhcp",
                        "text": "DHCP Protokolü",
                        "description": "Dynamic Host Configuration Protocol'ü öğren",
                        "subItems": [
                            {
                                "id": "dhcp-process",
                                "text": "DHCP Discover, Offer, Request, Acknowledge süreci"
                            }
                        ]
                    },
                    {
                        "id": "dns",
                        "text": "DNS Sistemi",
                        "description": "Domain Name System çalışma prensiplerini öğren",
                        "subItems": [
                            {
                                "id": "dns-hierarchy",
                                "text": "DNS hiyerarşisi ve kayıt tipleri"
                            },
                            {
                                "id": "dns-resolution",
                                "text": "DNS çözümleme süreci"
                            }
                        ]
                    },
                    {
                        "id": "http-https",
                        "text": "HTTP ve HTTPS",
                        "description": "Web protokollerini öğren",
                        "subItems": [
                            {
                                "id": "http-basics",
                                "text": "HTTP çalışma prensibi"
                            },
                            {
                                "id": "https-security",
                                "text": "HTTPS güvenlik mekanizmaları ve SSL/TLS"
                            }
                        ]
                    }
                ]
            },
            "service_ports": {
                "title": "Servis Portları",
                "items": [
                    {
                        "id": "well-known-ports",
                        "text": "Yaygın Kullanılan Portlar",
                        "description": "Standart servis portlarını öğren",
                        "subItems": [
                            {
                                "id": "port-list",
                                "text": "FTP(20/21), SSH(22), Telnet(23), SMTP(25), DNS(53), HTTP(80), POP3(110), HTTPS(443)"
                            }
                        ]
                    }
                ]
            }
        }
    }
};