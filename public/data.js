const todoData = {
  "java_spring_interview": {
    "title": "Garanti BBVA Mülakat Hazırlığı: Java Spring",
      "sections": {
      "day0_morning": {
        "title": "Blockchain ve Dijital Varlık Ticaret Sistemleri Roadmap (Genel Bakış)",
        "items": [
          {
            "id": "blockchain-fundamentals",
            "text": "Blockchain ve Digital Assets Temelleri",
            "description": "Blockchain teknolojisinin ve dijital varlıkların temel prensipleri, çalışma mekanizmaları ve finansal uygulamaları. Dağıtık defter teknolojisinin (distributed ledger technology) getirdiği paradigma değişimi ve finansal sistemlere etkileri.",
            "subItems": [
              {
                "id": "blockchain-101", 
                "text": "Blockchain Teknolojisi Temelleri", 
                "description": "Blockchain'in çalışma prensibi, kriptografik fonksiyonlar, consensus algoritmaları ve distributed ledger kavramı. Hash fonksiyonları, public/private key encryption, digital signatures ve merkle trees gibi kriptografik yapıtaşları. Proof of Work (PoW), Proof of Stake (PoS), Delegated Proof of Stake (DPoS) gibi consensus mekanizmaları ve bunların enerji verimliliği, güvenlik, merkeziyetsizlik açısından karşılaştırması."
              },
              {
                "id": "crypto-assets", 
                "text": "Kripto Varlıklar ve Tokenization", 
                "description": "Farklı kripto varlık türleri: Cryptocurrency, utility tokens, security tokens, non-fungible tokens (NFT), stablecoins. Ethereum tabanlı token standartları (ERC-20, ERC-721, ERC-1155) ve özellikleri. Gerçek dünya varlıklarının (real-world assets) blockchain üzerinde tokenize edilmesi süreci ve avantajları. Tokenization'ın geleneksel finansal enstrümanlara kıyasla sağladığı likidite, bölünebilirlik, programlanabilirlik ve global erişim avantajları."
              },
              {
                "id": "blockchain-types", 
                "text": "Blockchain Türleri ve Mimariler", 
                "description": "Public (permissionless), private ve consortium (permissioned) blockchain yapıları arasındaki farklar. Bitcoin, Ethereum, Hyperledger Fabric, Corda, Solana, Avalanche gibi önemli blockchain platformlarının mimari özellikleri ve kullanım alanları. Layer-1 ve Layer-2 çözümleri, sidechains, state channels, rollups gibi ölçeklendirme yaklaşımları. Interoperability protokollerinin çalışma prensipleri ve cross-chain işlemlerin sağlanması."
              },
              {
                "id": "smart-contracts", 
                "text": "Smart Contracts ve DApps", 
                "description": "Akıllı sözleşmelerin (smart contracts) tanımı, çalışma prensibi ve kullanım senaryoları. Ethereum Virtual Machine (EVM) ve bytecode execution. Solidity programlama dili temelleri ve güvenli smart contract geliştirme prensipleri. Decentralized Applications (DApps) mimarisi, Web3.js/Ethers.js kütüphaneleri ile blockchain etkileşimi. Decentralized Finance (DeFi) protokolleri ve composability kavramı."
              }
            ]
          },
          {
            "id": "trading-systems",
            "text": "Ticaret Sistemleri ve Financial Protokoller",
            "description": "Digital assets ticareti için kullanılan sistemlerin mimarisi, protokolleri ve teknolojik altyapısı. Order matching engine'ler, market data sistemleri, risk yönetimi ve settlement süreçlerinin tasarım prensipleri ve implementasyonu.",
            "subItems": [
              {
                "id": "trading-fundamentals", 
                "text": "Trading Sistemleri Temelleri", 
                "description": "Trading sistemlerinin temel bileşenleri: Order management, matching engine, market data, risk control, clearing & settlement modülleri. Order tipleri (market, limit, stop, IOC, FOK vb.) ve execute edilme prensipleri. Liquidity kavramı, order book yapısı ve market maker/taker rolleri. Price discovery ve fair value kavramları. Centralized Exchange (CEX) ve Decentralized Exchange (DEX) mimarilerinin karşılaştırması."
              },
              {
                "id": "fix-protocol", 
                "text": "FIX Protocol ve Finansal Mesajlaşma", 
                "description": "Financial Information eXchange (FIX) protokolünün yapısı, mesaj formatları ve finans endüstrisindeki rolü. Tag-value formatı, header-body-trailer yapısı ve session yönetimi. Temel FIX mesaj tipleri: NewOrderSingle, ExecutionReport, OrderCancelRequest, MarketDataRequest, vb. FIX Engine implementasyonu ve performance optimizasyonu. FIX protokolünün modern alternatifleri ve binary protokoller ile karşılaştırması."
              },
              {
                "id": "matching-engines", 
                "text": "Order Matching Engine Mimarisi", 
                "description": "Emir eşleştirme motorlarının (matching engine) tasarım prensipleri ve performans gereksinimleri. Price-time priority (FIFO), pro-rata, ve hybrid matching algoritmaları. Central limit order book (CLOB) implementasyonu ve optimizasyonu. Sürekli eşleştirme (continuous matching) ve açık artırma (auction) modelleri. Yüksek frekanslı trading için low-latency sistem tasarımı prensipleri."
              },
              {
                "id": "market-data", 
                "text": "Market Data Sistemleri", 
                "description": "Market data mimarisi, veri formatları ve dağıtım mekanizmaları. L1 (top of book) vs L2 (full order book) vs L3 (full order by order) data türleri. Realtime market data publishing ve subscription modelleri. Time-series veritabanları ve market data arşivleme. Order book reconstruction ve replay mekanizmaları. OHLCV (Open-High-Low-Close-Volume) bars ve teknik analiz göstergeleri hesaplama."
              }
            ]
          },
          {
            "id": "java-stack",
            "text": "Java/Spring Teknoloji Stack",
            "description": "Digital Assets Trading Solutions ekibinin kullandığı Java ve Spring ekosistemi teknolojileri, architecture patterns ve development best practices. Microservice mimarisi, reactive programming, ve event-driven architecture yaklaşımları.",
            "subItems": [
              {
                "id": "java-core-advanced", 
                "text": "Advanced Java Konseptleri", 
                "description": "High-frequency trading ve digital asset systems için kritik Java konuları: Memory management ve GC tuning, off-heap memory kullanımı, JVM optimizasyon teknikleri. Concurrency patterns: CompletableFuture, Fork/Join framework, Executor service, Thread pools, non-blocking I/O. Java Flight Recorder (JFR) ve Java Mission Control (JMC) ile performans analizi. Java 9+ modül sistemi, sealed classes, records gibi modern Java özellikleri."
              },
              {
                "id": "spring-reactive", 
                "text": "Reactive Programming ile Spring", 
                "description": "Spring WebFlux ve Project Reactor kullanarak non-blocking, reactive uygulamalar geliştirme. Mono ve Flux API'lerinin kullanımı, reactive operators (map, flatMap, filter, zip, vb.). Backpressure yönetimi ve error handling stratejileri. R2DBC ile reactive database access. WebClient ile reactive HTTP istekleri. Reactive patterns: hot vs cold publishers, caching, retry mechanisms."
              },
              {
                "id": "microservices-arch", 
                "text": "Microservice Mimarisi", 
                "description": "Trading sistemleri için microservice architecture design: Domain-driven design ve bounded contexts, API gateway pattern, service discovery, circuit breaker, distributed tracing. Spring Cloud Netflix ve Spring Cloud ecosystem (Eureka, Ribbon, Feign, Hystrix, Sleuth, vb.). gRPC implementasyonu ve Protocol Buffers ile servis haberleşmesi. Event sourcing ve CQRS (Command Query Responsibility Segregation) pattern'leri."
              },
              {
                "id": "messaging-eventing", 
                "text": "Messaging ve Event-Driven Architecture", 
                "description": "Apache Kafka ve RabbitMQ ile event-driven architecture implementasyonu. Kafka topics, partitions, consumer groups, ve exactly-once semantics. Spring Kafka ve Spring AMQP ile entegrasyon. Event serialization formatları: JSON, Avro, Protocol Buffers. Schema registry ve backward/forward compatibility. Kafka Streams ve Kafka Connect kullanımı. Event choreography vs orchestration pattern'leri."
              }
            ]
          },
          {
            "id": "devops-practices",
            "text": "DevOps Practices ve Quality Assurance",
            "description": "Digital asset trading sistemleri için güvenilir, yüksek kaliteli yazılım delivery süreçleri. Continuous integration/deployment pipeline'ları, test otomasyonu, monitoring ve infrastructure as code yaklaşımları.",
            "subItems": [
              {
                "id": "testing-strategies", 
                "text": "Test Stratejileri", 
                "description": "Trading sistemleri için kapsamlı test stratejisi: Unit tests (JUnit 5, Mockito, AssertJ), integration tests, contract tests (Spring Cloud Contract), performance tests (JMeter, Gatling), chaos tests. Test-driven development (TDD) ve behavior-driven development (BDD) yaklaşımları (Cucumber, Spock). Mock vs Stub vs Spy kullanım senaryoları. Test verisi yönetimi ve test container'ları ile test ortamları."
              },
              {
                "id": "ci-cd", 
                "text": "CI/CD Pipeline", 
                "description": "Continuous Integration/Continuous Delivery workflow: Jenkins, GitLab CI/CD, GitHub Actions konfigürasyonu. Pipeline as code yaklaşımı ve multi-branch pipeline'lar. Build araçları: Maven, Gradle. Static code analysis: SonarQube, SpotBugs, PMD. Artifact repository yönetimi. Blue/green deployment, canary releases, feature flags. Automated rollback stratejileri ve deployment safety."
              },
              {
                "id": "monitoring-observability", 
                "text": "Monitoring ve Observability", 
                "description": "Trading platformları için kritik monitoring ve observability framework'leri: Prometheus ile metrics collection, Grafana ile visualization, Alertmanager ile alerting. Distributed tracing için Jaeger veya Zipkin. Log aggregation için ELK stack (Elasticsearch, Logstash, Kibana) veya Splunk. Application Performance Monitoring (APM) araçları. Health checks, circuit breakers, ve resilience patterns."
              },
              {
                "id": "infrastructure-code", 
                "text": "Infrastructure as Code", 
                "description": "Infrastructure as Code (IaC) ile immutable infrastructure yönetimi: Docker containerization, multi-stage build process, Dockerfile best practices. Kubernetes orchestration, deployment strategies, auto-scaling, ve resource management. Helm charts ve Kubernetes operator'ları. Infrastructure provisioning için Terraform veya CloudFormation. Istio service mesh ile traffic yönetimi, security ve observability."
              }
            ]
          },
          {
            "id": "security-compliance",
            "text": "Security ve Regulatory Compliance",
            "description": "Blockchain ve digital asset sistemlerinde güvenlik ve regülasyon gereksinimlerinin yönetimi. Kriptografik güvenlik, multi-signature cüzdanlar, key management systems ve regulatory reporting gereksinimleri.",
            "subItems": [
              {
                "id": "crypto-security", 
                "text": "Kriptografik Güvenlik", 
                "description": "Digital asset sistemleri için kriptografik güvenlik önlemleri: Secure key generation, storage ve management. Hardware Security Module (HSM) entegrasyonu. Multi-signature wallet implementasyonu. Threshold signatures (TSS) ve Shamir's Secret Sharing. Zero-knowledge proofs kullanım senaryoları. Quantum computing threats ve post-quantum cryptography. Key rotation policies ve secure entropy sources."
              },
              {
                "id": "app-security", 
                "text": "Application Security", 
                "description": "Secure software development lifecycle (SSDLC) ve uygulama güvenliği: OWASP top 10 vulnerabilities ve mitigations. Security by design principles. Spring Security ile authentication ve authorization. OAuth2, OpenID Connect, JWT implementasyonu. API security, rate limiting, input validation. Secure coding practices ve security code reviews. Dependency vulnerability scanning. Penetration testing ve security assessments."
              },
              {
                "id": "blockchain-security", 
                "text": "Blockchain Security", 
                "description": "Blockchain-specific güvenlik konuları: Smart contract vulnerabilities (reentrancy, overflow/underflow, front-running, vb.). Security auditing tools ve methodologies. Gas optimization ve DoS protection. Oracle manipülasyon saldırıları ve çözümleri. 51% saldırıları, Sybil attacks, selfish mining gibi consensus vulnerabilities. Cross-chain bridge security. DeFi-specific exploits: flash loans, price manipulation, sandwich attacks."
              },
              {
                "id": "regulatory-compliance", 
                "text": "Regulatory Compliance", 
                "description": "Dijital varlık alanında düzenleyici gereksinimler: KYC (Know Your Customer) ve AML (Anti-Money Laundering) entegrasyonu. FATF Travel Rule implementasyonu. Market surveillance ve manipulation detection. Transaction monitoring systems. Regulatory reporting requirements: MiFID II, EMIR, Dodd-Frank. Vergi raporlama gereksinimleri. Data privacy regulations (GDPR, CCPA) uyumluluğu. Blockchain analytics tools ve forensics."
              }
            ]
          },
          {
            "id": "job-specific-skills",
            "text": "Pozisyona Özel Gereksinimler ve Hazırlık Planı",
            "description": "Digital Assets Trading Solutions ekibinde pozisyon için istenen spesifik beceriler, hazırlık stratejisi ve öğrenme yol haritası. Teknik ve domain bilgisini geliştirmek için planlı yaklaşım.",
            "subItems": [
              {
                "id": "tech-skills", 
                "text": "Technical Skills Roadmap", 
                "description": "Pozisyon için gerekli teknik becerileri geliştirme planı: Java/Spring ekosisteminde core ve advanced konular üzerine derinleşme. REST API tasarımı ve implementation best practices. Reactive programming ve non-blocking I/O patterns. Microservice architecture patterns. gRPC, Protocol Buffers ve binary serialization formats. Messaging systems (Kafka, RabbitMQ) implementasyonu. Test-driven development ve test automation. CI/CD pipeline optimization. Performance tuning ve profiling."
              },
              {
                "id": "domain-knowledge", 
                "text": "Domain Knowledge Edinme", 
                "description": "Digital assets ve trading sistemleri ile ilgili domain bilgisi edinme stratejisi: Blockchain ve cryptocurrency temelleri üzerine kapsamlı anlayış geliştirme. Trading mekanizmaları, order tipleri ve matching algoritmaları. FIX protokolü ve finansal mesajlaşma standartları. Market data yapıları ve feed handler implementasyonu. Risk management sistemleri ve margin trading. Takas (settlement) ve mutabakat (reconciliation) süreçleri. Regulatory landscape ve compliance gereksinimleri."
              },
              {
                "id": "3rd-party-integration", 
                "text": "3rd Party Systems Entegrasyonu", 
                "description": "Üçüncü parti sistemler ve servislerle çalışma deneyimi geliştirme: Cryptocurrency exchange API'leri ve websocket feeds. Blockchain node RPC interfaces. Hardware wallet ve custody solution entegrasyonları. Market data provider'lar ve realtime data feed'ler. Payment processor ve fiat gateway entegrasyonları. KYC/AML service provider entegrasyonu. Oracle services ve price feeds. Inter-blockchain communication protocols."
              },
              {
                "id": "soft-skills", 
                "text": "Soft Skills ve Team Collaboration", 
                "description": "Digital Assets Trading Solutions ekibinde etkin çalışma için önemli soft skill'ler: Agile/Scrum metodolojilerinde deneyim. Technical documentation yazma ve API specification hazırlama. Knowledge sharing ve peer code review pratikleri. Problem solving ve analytical thinking. Interdisciplinary collaboration (product, devops, security, compliance teams). Adaptability ve öğrenme çevikliği. Remote collaboration tools ve practices. İngilizce teknik iletişim yetkinliği."
              },
              {
                "id": "learning-resources", 
                "text": "Öğrenme Kaynakları ve Pratik", 
                "description": "Blockchain ve trading systems alanında derinleşmek için önerilen kaynaklar: Teknik kitaplar: 'Mastering Bitcoin', 'Building Trading Systems', 'Hands-On High Performance with Spring 5'. Online kurslar: Coursera/Udemy üzerinde blockchain development ve Java performance kurslari. GitHub repositories: açık kaynak trading platformları ve blockchain projeleri. Teknik bloglar ve akademik paperlar. Blockchain sandbox'lar ve testnet'ler üzerinde uygulama geliştirme. Paper trading APIs üzerinde trading system prototyping. Konferanslar ve meetup'lar. Domain specific community'lere katılım."
              }
            ]
          }
        ]
      },
      "day1_morning": {
        "title": "Temel Java Bilgisi ve OOP Kavramları (1. Gün Sabah)",
          "items": [
            {
            "id": "java-basics",
            "text": "Java Dilinin Temelleri",
            "description": "Java programlama dilinin temel yapı taşları, sözdizimi ve özellikleri. Java'nın platform bağımsızlığı (write once, run anywhere) ve JVM mimarisi.",
            "subItems": [
              {
                "id": "data-types", 
                "text": "Veri Tipleri", 
                "description": "Primitive veri tipleri (byte, short, int, long, float, double, boolean, char) ve Referans tipleri (String, Arrays, Classes, Interfaces). Primitive ve referans tipleri arasındaki farklar, bellekte nasıl saklandıkları ve memory yönetimi özellikleri."
              },
              {
                "id": "type-casting", 
                "text": "Type Casting", 
                "description": "Implicit (otomatik) ve Explicit (manuel) tür dönüşümleri. Primitive tipler arasında, referans tipleri arasında ve aralarındaki dönüşüm kuralları."
              },
              {
                "id": "operators-control-flow", 
                "text": "Operatörler ve Kontrol Akış Mekanizmaları", 
                "description": "Aritmetik, ilişkisel, mantıksal ve bitwise operatörler. if/else, switch, ternary operatör kullanımı. for, while, do-while döngüleri ve break, continue, return ifadeleri ile akış kontrolü."
              },
              {
                "id": "arrays-strings", 
                "text": "Diziler ve String Sınıfı", 
                "description": "Tek ve çok boyutlu Array tanımlama, başlatma ve erişim. String'in Immutability özelliği ve neden değiştirilemez olduğu. String işlemleri için StringBuilder ve StringBuffer sınıflarının kullanımı ve performans farkları."
              },
              {
                "id": "methods", 
                "text": "Metotlar", 
                "description": "Method tanımlama, parametre geçişi (pass by value vs. pass by reference), method overloading (aşırı yükleme) ve method overriding (geçersiz kılma) kavramları arasındaki farklar. Statik ve statik olmayan metotlar."
              },
              {
                "id": "garbage-collection", 
                "text": "Garbage Collection", 
                "description": "JVM'in otomatik bellek yönetimi, garbage collector'ın çalışma prensibi, unreachable nesnelerin belirlenmesi ve temizlenmesi."
              }
            ]
          },
          {
            "id": "oop-principles",
            "text": "Nesne Yönelimli Programlama (OOP) Prensipleri",
            "description": "Java'nın temelini oluşturan OOP prensipleri, sınıf tasarımı ve nesne tabanlı düşünme yaklaşımı. Java'nın 'Her şey bir nesnedir' (neredeyse) felsefesi.",
            "subItems": [
              {
                "id": "classes-objects", 
                "text": "Sınıflar ve Nesneler", 
                "description": "Sınıf tanımlama, constructor (yapıcı metot) kullanımı, this keyword, instance ve class değişkenleri, metotlar, erişim belirleyiciler. Nesne oluşturma, başlatma ve kullanma."
              },
              {
                "id": "encapsulation", 
                "text": "Encapsulation (Kapsülleme)", 
                "description": "Veri ve davranışın bir sınıf içinde sarmalanması, doğrudan erişimin kısıtlanması. Erişim belirleyiciler (public, private, protected, default) ve bunların görünürlük alanları. Getter/Setter metotları ile kontrollü erişim sağlama."
              },
              {
                "id": "inheritance", 
                "text": "Inheritance (Kalıtım)", 
                "description": "Bir sınıfın başka bir sınıftan özelliklerini miras alması, kodun yeniden kullanılabilirliği. extends anahtar kelimesi, super kullanımı, 'IS-A' ilişkisi ve kalıtım hiyerarşisi. Final sınıflar ve neden kalıtılamayacağı."
              },
              {
                "id": "polymorphism", 
                "text": "Polymorphism (Çok Biçimlilik)", 
                "description": "Bir nesnenin farklı şekillerde davranabilme yeteneği. Statik (compile-time) ve Dinamik (run-time) Polymorphism. Method overloading ve overriding ile gerçekleştirme. instanceof operatörü, Upcasting/Downcasting ve Type Safety."
              },
              {
                "id": "abstraction", 
                "text": "Abstraction (Soyutlama)", 
                "description": "Karmaşıklığı yönetme mekanizması, detayların gizlenmesi ve önemli özelliklerin öne çıkarılması. abstract sınıflar/metotlar ve bunların kullanım amaçları. Interface'ler ve abstract class'lar arasındaki farklar ve ne zaman hangisinin tercih edileceği."
              },
              {
                "id": "coupling-cohesion", 
                "text": "Coupling ve Cohesion", 
                "description": "Loose coupling (gevşek bağlantı) ve high cohesion (yüksek uyum) prensiplerinin önemi. Sınıflar arası bağımlılıkları azaltmanın yolları ve iyi tasarlanmış OOP sistemlerinin özellikleri."
              }
            ]
          },
          {
            "id": "java-concepts",
            "text": "Java'da Önemli Kavramlar ve Sınıflar",
            "description": "Java'da sıkça kullanılan kavramlar, anahtar kelimeler ve temel sınıflar. Güçlü tip kontrolü ve çalışma zamanı özellikleri.",
            "subItems": [
              {
                "id": "final-keyword", 
                "text": "final Anahtar Kelimesi", 
                "description": "final değişkenler (sabitler), final metotlar (override edilemez), final sınıflar (extend edilemez). Kullanım amaçları, immutability sağlama ve güvenlik etkileri. final referanslar ve içeriklerinin değiştirilebilirliği arasındaki fark."
              },
              {
                "id": "static-keyword", 
                "text": "static Anahtar Kelimesi", 
                "description": "static değişkenler (sınıf değişkenleri), static metotlar (sınıf metotları), static bloklar (sınıf başlatma) ve nested static sınıflar. Nesnelerden bağımsız olan ve sınıfa ait özelliklerin tanımlanması. static import ve utility sınıfları."
              },
              {
                "id": "object-class", 
                "text": "Object Sınıfı ve Metotları", 
                "description": "Java'da tüm sınıfların atası olan Object sınıfı. equals(), hashCode(), toString(), clone(), finalize(), getClass() metotları ve uygun şekilde override edilmesi. equals() ve hashCode() kontratı."
              },
              {
                "id": "exception-handling", 
                "text": "Exception Handling (İstisna Yönetimi)", 
                "description": "try-catch-finally blokları, try-with-resources yapısı, throw ve throws anahtar kelimeleri. Checked vs Unchecked Exceptions arasındaki farklar ve ne zaman hangisini kullanmak gerektiği. Custom Exception sınıfları oluşturma ve exception hiyerarşisini tasarlama."
              },
              {
                "id": "collections-framework", 
                "text": "Java Collections Framework (JCF)", 
                "description": "Veri yapılarını standart bir şekilde yönetmeyi sağlayan Collections Framework mimarisi. List, Set, Queue, Map arayüzleri ve gerçekleştirimleri. Collections utility sınıfı ve sık kullanılan metotları.",
                "subItems": [
                  {"id": "list", "text": "List: ArrayList, LinkedList", "description": "Sıralı koleksiyonlar için kullanılan yapılar. ArrayList (dinamik dizi, rastgele erişim) ve LinkedList (bağlı liste, ekle/çıkar operasyonları) arasındaki performans farklılıkları."},
                  {"id": "set", "text": "Set: HashSet, LinkedHashSet, TreeSet", "description": "Benzersiz eleman tutan koleksiyonlar. HashCode tabanlı unique kontrolü. hashCode() ve equals() metotlarının doğru implementasyonunun önemi. Hash tabanlı, bağlantılı ve ağaç tabanlı implementasyonların farkları."},
                  {"id": "map", "text": "Map: HashMap, LinkedHashMap, TreeMap", "description": "Anahtar-değer çiftleri tutan koleksiyonlar. Anahtarların benzersiz olması gerekliliği ve Map implementasyonları arasındaki farklar. ConcurrentHashMap gibi thread-safe alternatiflerin varlığı."},
                  {"id": "queue", "text": "Queue: LinkedList, PriorityQueue, Deque", "description": "Kuyruk veri yapıları ve FIFO (First In First Out), LIFO (Last In First Out) prensiplerine göre işlem yapan koleksiyonlar. LinkedList ve ArrayDeque performans özellikleri."}
                  ]
                }
              ]
            },
            {
            "id": "java8-features",
            "text": "Java 8+ Özellikleri",
            "description": "Java 8 ve sonrasında gelen önemli yenilikler ve fonksiyonel programlama özellikleri. Yazılım geliştirme paradigmalarının genişlemesi ve modern Java kodlama teknikleri.",
            "subItems": [
              {
                "id": "functional-interfaces", 
                "text": "Functional Interfaces", 
                "description": "Tek bir abstract metot içeren ve @FunctionalInterface anotasyonu ile işaretlenebilen arayüzler. Predicate<T>, Consumer<T>, Function<T,R>, Supplier<T> gibi dahili fonksiyonel arayüzler ve kullanım alanları."
              },
              {
                "id": "lambda-expressions", 
                "text": "Lambda Expressions", 
                "description": "Kısa, anonim fonksiyonları tanımlamaya yarayan sözdizimi. Parametre listesi, ok operatörü (->) ve gövdeden oluşan yapı. Daha az ve daha okunabilir kod yazmanın yolu. Lambda vs Anonymous Inner Class farkları."
              },
              {
                "id": "method-references", 
                "text": "Method References", 
                "description": "Var olan metotları lambda yerine kullanma yöntemi. StaticMethod::methodName, object::instanceMethod, Class::instanceMethod, Class::new gibi farklı formlar ve kullanım alanları."
              },
              {
                "id": "stream-api", 
                "text": "Stream API", 
                "description": "Koleksiyonlar üzerinde fonksiyonel-style işlemler için kullanılan güçlü API. filter, map, flatMap, reduce, collect, sorted, forEach gibi metotlar ve stream pipeline oluşturma. Paralel stream ile çoklu işlemci kullanımı."
              },
              {
                "id": "optional", 
                "text": "Optional Sınıfı", 
                "description": "NullPointerException hatalarından kaçınma ve null kontrollerini daha zarif bir şekilde yapma amacıyla tasarlanmış konteyner sınıfı. orElse, orElseGet, orElseThrow, ifPresent gibi metotlar ve fluent API tasarımı."
              },
              {
                "id": "date-time-api", 
                "text": "Yeni Tarih/Zaman API'si", 
                "description": "LocalDate, LocalTime, LocalDateTime, Instant, Duration, Period sınıfları ile daha tutarlı ve Thread-safe tarih/zaman işlemleri. Immutable yapılar ve DateTimeFormatter ile biçimlendirme."
              },
              {
                "id": "interface-methods", 
                "text": "Interface'lerde default ve static metotlar", 
                "description": "Interface'lere uygulama ekleyebilme yeteneği ve geriye dönük uyumluluk sağlama. Interface evrimini kolaylaştırma ve utility metotları gruplandırma."
              }
            ]
          },
          {
            "id": "annotations",
            "text": "Java'da Anotasyonlar (Annotations)",
            "description": "Java'da metadata tanımlamaya yarayan ve derleme zamanında veya çalışma zamanında işlenebilen özel işaretleyiciler. Reflection API ile birlikte çalışarak güçlü özellikler sağlar.",
            "subItems": [
              {
                "id": "annotation-basics", 
                "text": "Anotasyon Nedir?", 
                "description": "Anotasyonların amacı, kod üzerinde ekstra bilgi sağlamak ve bu bilgilerin derleme zamanında veya çalışma zamanında işlenmesini mümkün kılmak. Deklaratif programlama ve konfigürasyon kolaylığı."
              },
              {
                "id": "standard-annotations", 
                "text": "Standart Anotasyonlar", 
                "description": "@Override (metot geçersiz kılma kontrolü), @Deprecated (kullanımdan kaldırma uyarısı), @SuppressWarnings (belirli uyarıları bastırma), @FunctionalInterface (fonksiyonel arayüz kontrolü) ve bunların kullanım amaçları."
              },
              {
                "id": "meta-annotations", 
                "text": "Meta-Anotasyonlar", 
                "description": "Anotasyonları tanımlamak için kullanılan anotasyonlar. @Target (nerelerde kullanılabileceği), @Retention (bilginin ne kadar süre tutulacağı), @Documented (JavaDoc'a dahil edilme), @Inherited (alt sınıflara aktarılma) ve özel anotasyon oluşturma."
              },
              {
                "id": "custom-annotations", 
                "text": "Özel Anotasyon Oluşturma", 
                "description": "Kendi anotasyonlarınızı tanımlama, elementler ekleme ve varsayılan değerler belirleme. Reflection API kullanarak anotasyonları çalışma zamanında okuma ve işleme koyma teknikleri."
              }
            ]
          }
        ]
      },
      "day1_afternoon": {
        "title": "Spring Framework Temelleri (1. Gün Öğleden Sonra)",
        "items": [
          {
            "id": "spring-basics",
            "text": "Spring Framework Temelleri",
            "description": "Spring Framework'ün temel yapısı, bileşenleri, tasarım felsefesi ve kurumsal uygulamaların geliştirilmesinde sağladığı avantajlar. Enterprise Java uygulamalarını geliştirmeyi kolaylaştıran ve lightweight container olarak başlayıp kapsamlı bir ekosisteme dönüşen Spring'in temel özellikleri.",
            "subItems": [
              {
                "id": "spring-intro", 
                "text": "Spring Framework Nedir?", 
                "description": "Rod Johnson tarafından 2003 yılında 'Expert One-on-One J2EE Design and Development' kitabıyla ortaya çıkan ve EJB'nin karmaşıklığına alternatif olarak geliştirilen Spring Framework'ün tarihçesi ve felsefesi. POJO tabanlı geliştirmeyi teşvik eden, test edilebilirliği artıran, gevşek bağlantılı (loosely coupled) uygulamalar geliştirmeyi sağlayan bir framework olarak Spring'in özellikleri. Lightweight container olarak başlayıp zamanla MVC, Security, Data Access, Cloud gibi modüllerle büyük bir ekosisteme dönüşmesi."
              },
              {
                "id": "spring-modules", 
                "text": "Spring Modülleri", 
                "description": "Spring Framework'ün modüler yapısı ve ana bileşenleri: 1) Core Container (Spring Core, Spring Beans, SpEL, Spring Context): DI, IoC ve temel altyapı. 2) AOP (Aspect-Oriented Programming): Cross-cutting concerns yönetimi. 3) Data Access/Integration (JDBC, ORM, Transactions, JMS): Veritabanı ve mesajlaşma entegrasyonu. 4) Web (Spring MVC, WebSocket, Servlet): Web uygulamaları geliştirme. 5) Test: Unit ve entegrasyon testleri. Her modül belirli bir soruna odaklanır ve diğer modüllerden bağımsız olarak kullanılabilir."
              },
              {
                "id": "ioc-di", 
                "text": "Inversion of Control (IoC) ve Dependency Injection (DI)", 
                "description": "Spring'in temelini oluşturan ve nesneler arası bağımlılık yönetimini kolaylaştıran iki temel prensip. IoC ile nesnelerin yaşam döngüsü kontrolü geliştiriciden Spring container'a devredilir ve 'Don't call us, we'll call you' prensibi uygulanır. DI, bir sınıfın bağımlılıklarının dışarıdan enjekte edilmesini sağlayarak, gevşek bağlantılı, test edilebilir ve bakımı kolay uygulamalar geliştirmeyi mümkün kılar.",
                "subItems": [
                  {"id": "ioc-principle", "text": "IoC Prensibi", "description": "Geleneksel programlamada, kodunuz kütüphaneleri çağırırken, IoC ile bu akış tersine çevrilir ve çerçeve (framework) sizin kodunuzu çağırır. Spring container, bean'lerin yaşam döngüsünü yönetir, onları oluşturur, konfigüre eder ve gerektiğinde yok eder. Hollywood Prensibi olarak da bilinen 'bizi aramayın, biz sizi ararız' yaklaşımı, uygulamanızın kontrolünü framework'e devrederek daha modüler ve esnek bir yapı oluşturur."},
                  {"id": "di-types", "text": "DI Türleri", "description": "Constructor Injection: Bağımlılıkların sınıf constructor'ı üzerinden enjekte edilmesi. Avantajları: Zorunlu bağımlılıklar, immutability, circular dependency tespiti. Setter Injection: Setter metotları aracılığıyla enjeksiyon. Optional bağımlılıklar için kullanışlı. Field Injection: Doğrudan alanlara @Autowired ile enjeksiyon. Kolay kullanımlı ancak test edilebilirliği düşük ve 'Single Responsibility Principle'a aykırı olabiliyor. Spring, Constructor Injection'ı önerilen yöntem olarak belirtir."},
                  {"id": "context-factory", "text": "ApplicationContext ve BeanFactory", "description": "BeanFactory, Spring'in temel IoC container'ıdır ve bean'lerin lazy-loading ile yüklenmesini sağlar. ApplicationContext ise BeanFactory'nin gelişmiş bir versiyonudur. Event propagation, AOP entegrasyonu, i18n desteği, web uygulaması context'leri gibi kurumsal özellikler sağlar. Çoğu uygulama için ApplicationContext tercih edilir: ClassPathXmlApplicationContext, FileSystemXmlApplicationContext, AnnotationConfigApplicationContext gibi implementasyonlar."}
                ]
              },
              {
                "id": "spring-beans", 
                "text": "Spring Beans", 
                "description": "Spring IoC container tarafından yönetilen, başlatılan, konfigüre edilen ve yaşam döngüsü kontrol edilen nesnelerdir. Spring uygulamasının temel yapı taşları olan bean'ler, business logic, data access, infrastructure gibi farklı katmanlarda kullanılabilir. Her bean benzersiz bir kimliğe sahiptir ve container bu kimlikle onlara erişim sağlar.",
                "subItems": [
                  {"id": "bean-definition", "text": "Bean Tanımlama Yöntemleri", "description": "XML Tabanlı Konfigürasyon: <bean> etiketleri ile tanımlama. İlk Spring versiyonlarında yaygın kullanıldı. Java Tabanlı Konfigürasyon: @Configuration ve @Bean anotasyonları ile Java sınıfları üzerinden tanımlama. Type-safe ve refactoring-friendly bir yaklaşım. Anotasyon Tabanlı Konfigürasyon: Sınıflardaki @Component, @Service, @Repository, @Controller gibi anotasyonlar ve component scanning ile otomatik bean oluşturma. Her yaklaşımın kendine özgü kullanım senaryoları vardır ve birlikte kullanılabilirler."},
                  {"id": "bean-scopes", "text": "Bean Scope'ları", "description": "singleton: (default) Tek bir bean instance'ı tüm Spring container tarafından paylaşılır. prototype: Her bean istendiğinde yeni bir instance oluşturulur. request: HTTP request başına bir instance oluşturulur (web uygulamaları). session: HTTP session başına bir instance oluşturulur. application: ServletContext yaşam döngüsü boyunca bir instance. websocket: WebSocket yaşam döngüsü boyunca bir instance. Scope seçimi, uygulamanın gereksinimlerine göre değişir ve stateful/stateless davranışları etkiler."},
                  {"id": "bean-lifecycle", "text": "Bean Yaşam Döngüsü", "description": "Instantiation: Bean nesnesi oluşturulur. Dependency Injection: Bağımlılıklar enjekte edilir. Initialization callbacks: @PostConstruct, InitializingBean.afterPropertiesSet(), veya custom init metodu çağrılır. Bean kullanılır. Destruction callbacks: @PreDestroy, DisposableBean.destroy(), veya custom destroy metodu ile temizlik yapılır. Yaşam döngüsü hook'ları, veritabanı bağlantıları, dosya işlemleri veya cache başlatma/temizleme gibi görevler için kullanılır."}
                ]
              }
            ]
          },
          {
            "id": "spring-boot-intro",
            "text": "Spring Boot'a Giriş ve Temel Özellikler",
            "description": "Spring Boot, Spring ekosistemini kullanarak production-ready uygulamalar oluşturmayı amaçlayan ve 'convention over configuration' prensibini benimseyen bir framework'tür. Spring'in karmaşık konfigürasyon ihtiyacını ortadan kaldırarak, minimal başlangıç konfigürasyonu ile çalışabilen, hızlı geliştirme sağlayan bir yapı sunar. Microservice mimarileri için ideal bir çözüm olarak tasarlanmıştır.",
            "subItems": [
              {
                "id": "spring-boot-basics", 
                "text": "Spring Boot Nedir?", 
                "description": "Spring Boot, Spring tabanlı uygulamaların hızla geliştirilebilmesi için tasarlanmış, 'opinionated' bir yaklaşımla gelen ve minimum konfigürasyon ile çalışabilen bir framework'tür. Auto-configuration sayesinde classpath'teki JAR'ları algılar ve otomatik olarak yapılandırır. Starter paketleri ile bağımlılık yönetimini basitleştirir (spring-boot-starter-web, spring-boot-starter-data-jpa gibi). Embedded sunucular (Tomcat, Jetty, Undertow) ile deployment sürecini kolaylaştırır. Production-ready özellikleri (metrics, health checks, externalized configuration) ile kurumsal uygulamalar için hazırdır. Spring Boot DevTools ile geliştirici deneyimini iyileştirir ve microservice'ler için ideal bir platformdur."
              },
              {
                "id": "spring-boot-annotation", 
                "text": "@SpringBootApplication Anotasyonu", 
                "description": "@SpringBootApplication, üç güçlü anotasyonu bir araya getiren birleşik bir anotasyondur: 1) @EnableAutoConfiguration: Spring Boot'un auto-configuration mekanizmasını aktif eder. Classpath içeriğine, ortam değişkenlerine ve bean tanımlarına göre otomatik yapılandırma yapar. 2) @ComponentScan: Uygulama paketini ve alt paketlerini tarar, @Component, @Service, @Repository, @Controller gibi anotasyonlar ile işaretlenmiş sınıfları bulup bean olarak kaydeder. 3) @Configuration: Sınıfın Spring configuration sınıfı olduğunu belirtir ve @Bean anotasyonlu metotlar içerebileceğini gösterir. Bu birleşik anotasyon, Spring Boot uygulamasının bootstrap sürecini başlatır ve auto-configuration, component scanning ve configuration sınıflarını tek bir anotasyonla aktifleştirir."
              },
              {
                "id": "spring-boot-annotations", 
                "text": "Temel Spring Boot Anotasyonları", 
                "description": "Spring Boot uygulamalarında, MVC yapısı, bağımlılık enjeksiyonu, yapılandırma ve web isteklerini işlemek için kullanılan temel anotasyonlar. Bu anotasyonlar sayesinde Java sınıflarının görevi, ilişkileri ve davranışları açıkça belirtilir ve framework tarafından uygun şekilde işlenir.",
                "subItems": [
                  {"id": "stereotype-annotations", "text": "Stereotype Anotasyonları", "description": "Spring bileşenlerinin rollerini belirten anotasyonlar: @Component: Genel amaçlı Spring bileşeni. @Service: Business logic katmanı için, servis sınıflarını işaretler. @Repository: Data access layer için, veritabanı işlemleri yapan sınıfları işaretler ve DataAccessException çevirisi sağlar. @Controller: MVC pattern'de controller rolündeki sınıfları işaretler, HTTP isteklerini işler. @RestController: @Controller + @ResponseBody birleşimidir, REST API endpoint'leri oluşturmak için kullanılır. Bu anotasyonlar hem semantic anlam taşır hem de component scanning sürecinde sınıfları Spring container'a kaydetmek için kullanılır."},
                  {"id": "di-annotations", "text": "DI Anotasyonları", "description": "Bağımlılık enjeksiyonu için kullanılan anotasyonlar: @Autowired: Spring container'a bir bağımlılığı otomatik olarak enjekte etmesini söyler. Constructor, setter veya field enjeksiyonunda kullanılabilir. @Qualifier: Aynı tipte birden fazla bean varsa, hangisinin enjekte edileceğini belirtmek için kullanılır. @Primary: Aynı tipte birden fazla bean varsa, öncelikli olarak kullanılacak olanı belirtir. @Resource ve @Inject: Java standardı (@javax.annotation.*) alternatifleri. Constructor enjeksiyonu tercih edildiğinde, Spring 4.3+ ile tek constructor varsa @Autowired gerekmez."},
                  {"id": "config-annotations", "text": "Config Anotasyonları", "description": "Yapılandırma için kullanılan anotasyonlar: @Configuration: Java tabanlı konfigürasyon sınıfını belirtir. @Bean: Bean tanımlamak için metot üzerinde kullanılır. @Value: Properties, SpEL ifadeleri veya ortam değişkenleri değerlerini enjekte eder. @PropertySource: Property dosyalarını yüklemek için kullanılır. @Profile: Bean'lerin hangi profilde aktif olacağını belirtir (dev, test, prod gibi). @ConfigurationProperties: Yapılandırılmış özellikleri POJO'lara bağlar. @EnableConfigurationProperties: @ConfigurationProperties sınıflarını aktifleştirir. Bu anotasyonlar esnek, type-safe ve modüler yapılandırma sağlar."},
                  {"id": "request-mapping", "text": "Request Mapping Anotasyonları", "description": "HTTP isteklerini metotlara bağlamak için kullanılan anotasyonlar: @RequestMapping: Genel amaçlı, tüm HTTP metotlarını destekler. HTTP metot spesifik kısaltmalar: @GetMapping, @PostMapping, @PutMapping, @DeleteMapping, @PatchMapping. Path parametreleri ve query string değerleri için: @PathVariable, @RequestParam. HTTP request gövdesinden nesne almak için: @RequestBody. HTTP response'u özelleştirmek için: @ResponseBody, @ResponseStatus. HTTP header'ları için: @RequestHeader, @CookieValue. Bu anotasyonlar sayesinde REST API'ler ve web uygulamaları kolayca geliştirilebilir."}
                ]
              },
              {
                "id": "application-properties", 
                "text": "application.properties vs application.yml", 
                "description": "Spring Boot uygulamalarının dışsal yapılandırması için kullanılan iki temel dosya formatıdır. Her iki format da aynı amaca hizmet eder ve birbirlerinin yerine kullanılabilir. application.properties: Key-value çiftleri içeren geleneksel Java properties formatı (spring.datasource.url=jdbc:mysql://localhost/db). application.yml: YAML formatında hiyerarşik yapılandırma sağlar, daha okunabilir ve az tekrarlıdır. Ortam profilleri (dev, test, prod), harici yapılandırma kaynakları (environment variables, command line args), yapılandırma önceliği ve placeholder değişken kullanımı (${VAR_NAME}) gibi özellikler her iki formatta da desteklenir. Profil-spesifik dosyalar (application-dev.properties) veya spring.profiles.active özelliği ile farklı ortamlar için farklı yapılandırma sağlanabilir."
                }
              ]
            },
            {
            "id": "design-principles",
            "text": "Tasarım Prensipleri (Design Principles)",
            "description": "Sürdürülebilir, genişletilebilir ve bakımı kolay yazılımlar geliştirmek için takip edilen yazılım tasarım prensipleri. Spring Framework, bu prensiplerin birçoğunu uygulayarak modern Java uygulamalarında iyi pratiklerin benimsenmesini teşvik eder. İyi tasarlanmış bir sistemin anlaşılabilirliği, test edilebilirliği ve değişime karşı esnekliği yüksektir.",
              "subItems": [
                {
                "id": "solid", 
                "text": "SOLID Prensipleri", 
                "description": "Robert C. Martin (Uncle Bob) tarafından tanımlanan, nesne yönelimli tasarımda kaliteyi artıran 5 temel prensip. SOLID, yazılımın değişen gereksinimlere uyum sağlamasını kolaylaştırır, bakım maliyetini düşürür, yeniden kullanılabilirliği artırır ve test edilebilirliği geliştirir. Spring, bu prensipleri doğal olarak destekler ve uygulamayı teşvik eder.",
                "subItems": [
                  {"id": "srp", "text": "Single Responsibility Principle", "description": "Bir sınıfın sadece bir sorumluluğu (değişmek için tek bir nedeni) olmalıdır. 'Bir sınıf yalnızca bir aktöre karşı sorumlu olmalıdır' olarak da ifade edilir. Spring'de Service, Repository, Controller ayrımı bu prensibi destekler. Örneğin: UserService sadece kullanıcı işlemleri mantığından sorumludur, veritabanı erişimi veya HTTP yanıtları oluşturmak gibi farklı sorumlulukları yoktur."},
                  {"id": "ocp", "text": "Open/Closed Principle", "description": "Yazılım birimleri (sınıf, modül, fonksiyon vb.) genişletmeye açık, değişime kapalı olmalıdır. Yeni özellikler eklenirken mevcut kod değiştirilmemeli, genişletilmelidir. Spring'in Strategy pattern kullanımı, dependency injection ve interface'ler üzerinden programlama yaklaşımı bu prensibi destekler. Örneğin: PaymentService interface'i, farklı ödeme yöntemlerini (CreditCardPayment, PayPalPayment) eklemek için değiştirilmeden genişletilebilir."},
                  {"id": "lsp", "text": "Liskov Substitution Principle", "description": "Alt sınıflar, üst sınıfların yerine geçebilmelidir; yani alt sınıflar üst sınıfların davranışlarını değiştirmeden kullanılabilmelidir. Spring'in polymorphism kullanımı bu prensibi destekler. Örneğin: JpaRepository alt türleri, Repository interface'inin davranışlarını bozmadan kullanılabilir. Bir metot Repository tipinde bir parametre bekliyorsa, herhangi bir JpaRepository de sorunsuz çalışmalıdır."},
                  {"id": "isp", "text": "Interface Segregation Principle", "description": "İstemciler kullanmadıkları arayüzlere bağımlı olmamalıdır; büyük interface'ler yerine, küçük ve spesifik interface'ler tercih edilmelidir. Spring'in farklı repository türleri (CrudRepository, PagingAndSortingRepository, JpaRepository) ve modül bazlı yapısı bu prensibi destekler. Örneğin: Sadece CRUD işlemleri yapan bir sınıf için CrudRepository yeterlidir, tüm JpaRepository metodlarına ihtiyaç yoktur."},
                  {"id": "dip", "text": "Dependency Inversion Principle", "description": "Yüksek seviyeli modüller, düşük seviyeli modüllere bağımlı olmamalıdır; her ikisi de soyutlamalara bağımlı olmalıdır. Soyutlamalar detaylara bağımlı olmamalı, detaylar soyutlamalara bağımlı olmalıdır. Spring'in IoC ve DI altyapısı bu prensibin doğrudan uygulamasıdır. Örneğin: ServiceImpl interface'e bağımlıdır, concrete repository sınıfına değil; bu sayede farklı repository implementasyonları kolayca değiştirilebilir."}
                ]
              },
              {
                "id": "other-principles", 
                "text": "DRY, KISS, YAGNI Prensipleri", 
                "description": "Kod kalitesini artıran diğer önemli prensipler: DRY (Don't Repeat Yourself): Bilginin tekrarlanmaması, her bilginin sistemde tek ve kesin bir temsili olması gerektiğini savunur. Spring'in component ve bean yapısı, aspect-oriented programming, template metodlar bu prensibi destekler. KISS (Keep It Simple, Stupid!): Karmaşıklıktan kaçınma, çözümleri mümkün olduğunca basit tutma prensibidir. Spring Boot'un convention over configuration yaklaşımı ve starter paketleri bu prensibi destekler. YAGNI (You Aren't Gonna Need It): İhtiyaç duyulmayan özellikleri önceden eklememek, gelecekteki olası ihtiyaçlar için şimdiden karmaşık tasarımlar yapmamak prensibidir. Spring'in modüler yapısı ve ihtiyaç odaklı bağımlılık ekleme yaklaşımı bu prensibi destekler."
              },
              {
                "id": "design-patterns", 
                "text": "Yaygın Kullanılan Design Patterns", 
                "description": "Spring Framework içinde yaygın olarak kullanılan ve Spring uygulamaları geliştirirken faydalanabileceğiniz tasarım desenleri: Singleton Pattern: Spring bean'leri varsayılan olarak singleton scope'ta oluşturulur, tek örnek tüm uygulama tarafından paylaşılır. Factory Pattern: BeanFactory ve ApplicationContext, nesnelerin oluşturulmasını ve yönetilmesini sağlar. Builder Pattern: Spring'in fluent API'leri (JdbcTemplate, RestTemplate) ve konfigürasyon yapısı. Adapter Pattern: Spring'in JDBC adaptörleri ve farklı teknolojiler için integration modülleri. Decorator Pattern: Spring AOP ile metotları dinamik olarak zenginleştirme. Proxy Pattern: Spring AOP'nin temelini oluşturur, metot çağrıları proxy üzerinden yönlendirilir. Template Method Pattern: JdbcTemplate, RestTemplate, TransactionTemplate. Observer Pattern: Spring'in event mekanizması (ApplicationEvent, ApplicationListener). Strategy Pattern: Farklı implementasyonlar arasında Spring'in dependency injection ile seçim yapması. Composite Pattern: Spring'in bean yapısında iç içe bağımlılıkların yönetilmesi. Bu tasarım desenleri kod organizasyonunu, bakım yapılabilirliği ve esnekliği artırır."
                }
              ]
            },
             {
            "id": "project-learning",
            "text": "Proje Üzerinden Öğrenme Önerileri",
            "description": "Spring ve Spring Boot kavramlarını teorik bilginin ötesinde, pratik uygulamalarla pekiştirmek için proje bazlı öğrenme stratejisi. Gerçek projeleri incelemek ve kendi projelerinizi geliştirmek, kavramları ve best practice'leri daha iyi anlamanızı sağlar. Küçük, odaklanmış projelerle başlayıp, kademeli olarak karmaşıklığı artırmak öğrenme sürecini hızlandırır.",
              "subItems": [
                {
                "id": "example-projects", 
                "text": "Örnek Projeler", 
                "description": "Spring Boot ile geliştirilen açık kaynak örnek projeler, kavramları ve yapıları anlamak için değerli kaynaklardır: GitHub'da 'spring-boot-sample', 'spring-petclinic', 'spring-boot-todo-app', 'spring-boot-library-management' gibi projeler incelenebilir. Spring.io sitesindeki 'Getting Started' rehberleri ve Spring Initializr (start.spring.io) ile oluşturulan örnek projeler başlangıç için idealdir. Baeldung, Mkyong, DZone gibi sitelerdeki Spring tutorial'ları ve örnekleri de faydalı kaynaklardır. Örnek projeleri incelerken: Proje yapısı ve katmanlara ayrılma, bean tanımlamaları ve DI kullanımı, HTTP endpoints ve REST controller'ların tasarımı, repository implementasyonu ve veritabanı erişimi, security yapılandırması, test yaklaşımı gibi noktalara dikkat edilmelidir."
              },
              {
                "id": "learning-topics", 
                "text": "Öğrenilecek Konular", 
                "description": "Projeler üzerinden öğrenilecek temel Spring konseptleri: Katmanlı Mimari: Controller, Service, Repository katmanları ve sorumluluk ayrımı. DTO (Data Transfer Object) Pattern: API ve domain modelleri arasında veri transfer nesneleri kullanımı, ModelMapper/MapStruct gibi mapping kütüphaneleri. REST API Design: Resource naming, HTTP methods, status codes, versioning, HATEOAS prensipleri. Logging: SLF4J ve Logback kullanımı, log seviyeleri, appender'lar, pattern layout'lar. Error Handling: @ControllerAdvice, @ExceptionHandler, özel exception sınıfları. Validation: Bean Validation (JSR-380), @Valid kullanımı, custom validator'lar. Transaction Management: @Transactional kullanımı, propagation ve isolation seviyeleri. Projeler üzerinden öğrenirken, bilinçli olarak challenge'lar oluşturup çözmeye çalışmak (ör: yeni bir feature eklemek, test coverage artırmak) öğrenmeyi pekiştirir."
                }
              ]
            }
        ]
      },
      "day2_morning": {
        "title": "Web Uygulamaları ve Spring MVC (2. Gün Sabah)",
        "items": [
          {
            "id": "spring-mvc-rest",
            "text": "Spring MVC ile Web Uygulamaları ve REST API Geliştirme",
            "description": "Spring MVC (Model-View-Controller), web uygulamalarını yapılandırmak için kullanılan güçlü bir framework'tür. HTTP isteklerinin alınmasından, işlenmesinden ve yanıtların oluşturulmasından sorumludur. MVC deseni, uygulama mantığını (model), kullanıcı arayüzünü (view) ve kullanıcı etkileşimini (controller) birbirinden ayırarak modüler ve bakımı kolay uygulamalar geliştirmeyi sağlar. RESTful API'ler ise modern web uygulamaları için tercih edilen, durumsuz, kaynak odaklı bir mimari tarzı sunar.",
            "subItems": [
              {
                "id": "mvc-architecture", 
                "text": "Spring MVC Mimarisi", 
                "description": "Spring MVC, Front Controller Pattern'i temel alan bir web framework'üdür. Merkezi bileşenleri şunlardır: 1) DispatcherServlet: Tüm HTTP isteklerini karşılayan ve uygun handler'lara yönlendiren 'Front Controller'. Web uygulamasının giriş noktası olarak görev yapar. 2) HandlerMapping: Gelen istekleri hangi controller'ın işleyeceğini belirler (@RequestMapping anotasyonlarına göre eşleştirme yapar). 3) HandlerAdapter: Controller'ları çağıran ve sonuçları işleyen bileşen. 4) ViewResolver: Controller'dan dönen view isimlerini gerçek view template'lerine çözer (Thymeleaf, JSP, FreeMarker vb.). 5) HttpMessageConverter: HTTP isteklerini Java nesnelerine (deserialize) ve Java nesnelerini HTTP yanıtlarına (serialize) dönüştürür. REST API'ler için özellikle önemlidir. Bu bileşenler sayesinde HTTP isteği alınır, işlenir ve uygun yanıt oluşturulur, tüm süreç Spring tarafından düzenlenir."
              },
              {
                "id": "controllers", 
                "text": "Controller'lar ve İstek Karşılama", 
                "description": "Spring MVC'de controller'lar, gelen HTTP isteklerini karşılayan ve işleyen sınıflardır. @Controller veya @RestController anotasyonları ile işaretlenir ve içerdikleri metotlar belirli URL pattern'lerine eşlenir. Controller'lar istek parametrelerini alır, business logic'i (genellikle service katmanı aracılığıyla) çağırır ve sonucu view'e veya doğrudan client'a döndürür.",
                "subItems": [
                  {"id": "controller-types", "text": "@RestController vs @Controller", "description": "@Controller, geleneksel MVC uygulamaları için kullanılır ve view name döndürerek template engine tarafından render edilecek bir view'e yönlendirir. @RestController ise @Controller + @ResponseBody birleşimidir ve metot dönüş değerlerini doğrudan HTTP response body'sine (genellikle JSON olarak) yazar. @ResponseBody ile, view resolver kullanılmaz ve dönüş değeri MessageConverter'lar tarafından uygun formata (JSON, XML vb.) dönüştürülür. REST API'ler için @RestController tercih edilirken, web sayfaları döndüren uygulamalar için @Controller kullanılır."},
                  {"id": "request-params", "text": "İstek Parametrelerini Alma", "description": "Spring MVC, HTTP isteklerinden veri almak için çeşitli anotasyonlar sunar: @PathVariable: URL path'indeki değişkenleri almak için (/users/{id} gibi). @RequestParam: Query string parametrelerini almak için (/users?name=John gibi). @RequestBody: HTTP request body'sinden veri almak ve onu Java nesnesine dönüştürmek için (JSON/XML post edildiğinde). @RequestHeader: HTTP header değerlerini almak için. @RequestAttribute: Request attribute'larını almak için. @CookieValue: Cookie değerlerini almak için. @ModelAttribute: Form verilerini doğrudan model nesnelerine bağlamak için. Bu anotasyonlar farklı senaryolarda veri alımını kolaylaştırır ve type conversion, validation gibi işlemleri Spring otomatik olarak yönetir."},
                  {"id": "response-creation", "text": "Yanıt Oluşturma", "description": "HTTP yanıtlarını oluşturmak ve özelleştirmek için Spring birkaç yaklaşım sunar: ResponseEntity<T>: HTTP durum kodu, header'lar ve body'yi tam kontrol etmek için kullanılan sınıf. Fluent API ile ResponseEntity.ok().header(...).body(...) gibi kullanılabilir. @ResponseStatus: Metot veya sınıf seviyesinde HTTP durum kodunu belirtmek için. @ResponseBody: Metot dönüş değerinin doğrudan response body'sine yazılmasını sağlar (@RestController bunu otomatik olarak ekler). HttpHeaders, HttpEntity: Response header'larını özelleştirmek için. HTTP yanıt kodları, cache kontrol, content-type gibi özellikleri belirlemek için bu yapılar kullanılır. ResponseEntity, en esnek yaklaşımdır ve genellikle REST API'ler için tercih edilir."}
                ]
              },
              {
                "id": "rest-principles", 
                "text": "RESTful API Tasarım Prensipleri", 
                "description": "REST (Representational State Transfer), web servisleri tasarlamak için kullanılan bir mimari stildir. Roy Fielding'in 2000 yılındaki doktora tezinde tanımlanmıştır. RESTful API'ler, kaynakları (resources) URL'ler üzerinden sunar ve HTTP metodları ile bu kaynaklar üzerinde operasyonlar gerçekleştirir. İyi tasarlanmış bir REST API, anlaşılır, tutarlı, bakımı kolay ve kolay kullanılabilir olmalıdır.",
                "subItems": [
                  {"id": "resource-url", "text": "Kaynak ve URL Tasarımı", "description": "REST API'lerde URL'ler, kaynakları (resources) temsil eder. İyi REST API URL tasarım prensipleri: 1) İsim kullanımı: Fiil yerine isimler kullanın (/users, /orders). 2) Çoğul kullanım: Kaynakları çoğul isimlerle ifade edin (/users, /products). 3) Hiyerarşi: İlişkili kaynakları hiyerarşik olarak belirtin (/users/{id}/orders). 4) Versionlama: API'nizi version ile başlatın (/v1/users) veya header/param ile versiyon belirtin. 5) Filtreleme ve sıralama için query parametreleri kullanın (/products?category=electronics&sort=price). 6) HATEOAS (Hypermedia as the Engine of Application State): Yanıtlarda ilgili diğer kaynaklara linkler içerin. 7) Arama için search endpoint'i (/search?q=term) veya filtreleme query'leri kullanın. İyi tasarlanmış URL'ler, API'nizi daha kullanıcı dostu ve sezgisel hale getirir."},
                  {"id": "http-methods", "text": "HTTP Metodları", "description": "RESTful API'lerde, farklı operasyonlar için standart HTTP metodları kullanılır: GET: Kaynak okuma, veri alma (idempotent). İstek body'si içermez. POST: Yeni kaynak oluşturma. İstek body'si içerir. PUT: Mevcut kaynağı tamamen güncelleme (idempotent). Tüm alanları içeren bir body gönderilir. PATCH: Kaynağın bir kısmını güncelleme. Sadece değiştirilen alanları içeren body gönderilir. DELETE: Kaynak silme (idempotent). OPTIONS: İlgili kaynağa hangi HTTP metodları ile istek yapılabileceğini öğrenme (CORS preflight). HEAD: Sadece header bilgilerini alma, body'siz GET. Aynı endpoint üzerinde farklı HTTP metodları kullanarak, URI yapısını sade tutarken çeşitli operasyonları gerçekleştirebilirsiniz: /users (GET: tüm kullanıcıları listele, POST: yeni kullanıcı ekle), /users/{id} (GET: belirli kullanıcıyı getir, PUT/PATCH: kullanıcıyı güncelle, DELETE: kullanıcıyı sil)."},
                  {"id": "status-codes", "text": "HTTP Durum Kodları", "description": "RESTful API'lerde, işlemin sonucunu belirtmek için HTTP durum kodları kullanılır: 2xx Success: 200 OK (başarılı), 201 Created (oluşturuldu), 204 No Content (içerik yok, başarılı). 3xx Redirection: 301 Moved Permanently, 304 Not Modified (cache için). 4xx Client Error: 400 Bad Request (geçersiz istek), 401 Unauthorized (kimlik doğrulama gerekli), 403 Forbidden (yetki yok), 404 Not Found (kaynak bulunamadı), 405 Method Not Allowed, 409 Conflict (çakışma), 422 Unprocessable Entity (doğrulama hatası). 5xx Server Error: 500 Internal Server Error (sunucu hatası), 502 Bad Gateway, 503 Service Unavailable. Doğru durum kodları kullanmak, client'ların isteğin sonucunu doğru şekilde yorumlamasını sağlar. Spring'de ResponseEntity veya @ResponseStatus ile durum kodları belirlenir."},
                  {"id": "rest-principles", "text": "Idempotency, Safety, Statelessness", "description": "RESTful API tasarımında temel prensipler: Idempotency (İdempotent): Aynı isteği birden fazla kez yapmanın, bir kez yapma ile aynı etkiye sahip olması. GET, PUT, DELETE idempotent olmalı, POST olmamalı. Safety (Güvenlilik): İsteğin kaynak durumunu değiştirmemesi. GET, HEAD, OPTIONS safe olmalı. Statelessness (Durumsuzluk): Sunucunun client durumunu tutmaması, her isteğin kendi içinde yeterli bilgiyi içermesi. RESTful API'ler durumsuz olmalı, client durumu client tarafında tutulmalı veya token ile taşınmalı. HATEOAS: Client'ın API'yi keşfedebilmesi için hypermedia (linkler) kullanımı. API'nin gelişimine olanak sağlar. Content Negotiation: Client'ın istediği içerik tipini belirtmesi (Accept header) ve sunucunun uygun formatta (JSON, XML, vb.) yanıt vermesi. Uniform Interface: Standart metodlar ve tutarlı URL yapısı kullanarak, client'ların API'yi kolay anlamasını sağlama. Bu prensipler, ölçeklenebilir, güvenilir ve anlaşılır API'ler oluşturmaya yardımcı olur."}
                ]
              },
              {
                "id": "validation", 
                "text": "Validation (Bean Validation API)", 
                "description": "Bean Validation API (JSR 380), Java nesnelerinin doğrulanması için standart bir yaklaşım sunar. Spring MVC bu API'yi destekler ve controller metotlarında gelen verilerin otomatik olarak doğrulanmasını sağlar. Bu, client'dan gelen verilerin güvenilir olmasını sağlamak için kritik bir adımdır. @Valid veya @Validated anotasyonu ile işaretlenen parametreler, tanımlı kısıtlamalara göre otomatik olarak doğrulanır. Hibernate Validator, Bean Validation'ın en yaygın implementasyonudur. Standart anotasyonlar: @NotNull: Değer null olmamalı. @NotEmpty: Koleksiyon/String boş olmamalı. @NotBlank: String null, boş veya sadece boşluk karakterleri içermemeli. @Size(min=, max=): String/Koleksiyon boyutu belirli aralıkta olmalı. @Min, @Max: Sayısal değerler için minimum/maksimum. @Email: Geçerli e-posta formatı. @Pattern: Regex ile format doğrulama. @Past, @Future: Tarih geçmiş/gelecek olmalı. Doğrulama başarısız olduğunda, MethodArgumentNotValidException fırlatılır. Bu exception, @ExceptionHandler veya @ControllerAdvice ile yakalanıp, client'a anlamlı hata mesajları döndürmek için kullanılabilir. Ayrıca custom validator'lar oluşturarak kendi iş kurallarınızı da doğrulama sürecine ekleyebilirsiniz."
              }
            ]
          }
        ]
      },
      "day2_afternoon": {
        "title": "Veri Erişimi ve Spring Data JPA (2. Gün Öğleden Sonra)",
        "items": [
          {
            "id": "spring-data-jpa",
            "text": "Spring Data JPA ile Veritabanı İşlemleri",
            "description": "Spring Data JPA, Java Persistence API (JPA) tabanlı depo (repository) implementasyonlarının oluşturulmasını büyük ölçüde kolaylaştıran bir Spring modülüdür. Temel amacı, veri erişim katmanındaki 'boilerplate' kod miktarını azaltmak ve veritabanı işlemlerini daha deklaratif ve kolay bir şekilde gerçekleştirmektir. Sadece interface tanımlayarak CRUD işlemlerini ve özel sorguları oluşturmayı sağlar.",
            "subItems": [
              {
                "id": "jpa-orm", 
                "text": "JPA ve ORM Kavramları", 
                "description": "JPA (Java Persistence API), Java dünyasında ilişkisel veritabanlarıyla çalışmak için kullanılan standart bir API'dir. JPA, Object-Relational Mapping (ORM) kavramını temel alır. ORM, nesne yönelimli programlama paradigması ile ilişkisel veritabanı paradigması arasındaki 'impedance mismatch' sorununu çözmeyi amaçlar. Temel kavramlar: 1) Entity: Java sınıfları ve veritabanı tabloları arasındaki eşlemeyi tanımlayan, @Entity ile işaretlenen POJO'lar. 2) EntityManager: Entity'lerin yaşam döngüsünü (persist, merge, remove, find) yöneten JPA arayüzü. 3) Persistence Context: Entity instance'larını yöneten ve veritabanı ile senkronize eden bir önbellek. 4) Persistence Unit: Belirli bir veritabanı için yapılandırma ayarlarını içeren mantıksal grup. 5) JPQL: SQL'e benzer ancak tablo/kolon yerine entity/alan üzerinden sorgu yapmayı sağlayan sorgu dili. Hibernate, EclipseLink ve OpenJPA, JPA'nın popüler implementasyonlarıdır. Spring Data JPA, JPA'nın yeteneklerini daha kolay kullanılabilir hale getirir ve Hibernate genellikle default JPA provider olarak kullanılır."
              },
              {
                "id": "spring-data-basics", 
                "text": "Spring Data JPA Temelleri", 
                "description": "Spring Data JPA, veri erişim katmanını (data access layer) oluşturmayı kolaylaştıran, kod tekrarını azaltan ve sorgu yönetimini basitleştiren bir framework'tür. En temel özelliği, sadece interface tanımlayarak çalışma zamanında otomatik olarak implementasyon oluşturmasıdır. Spring Data Repository hiyerarşisi, farklı ihtiyaçlara göre çeşitli yetenekler sunar.",
                "subItems": [
                  {"id": "repository-interfaces", "text": "Repository Arayüzleri", "description": "Spring Data JPA, farklı yetenekler sunan bir repository hiyerarşisi içerir: 1) Repository<T, ID>: Temel işaretleyici interface, marker repository. 2) CrudRepository<T, ID>: Basit CRUD (Create, Read, Update, Delete) operasyonlarını sunar (save, findById, findAll, delete, count, existsById). 3) PagingAndSortingRepository<T, ID>: CrudRepository'yi genişleterek sayfalama (pagination) ve sıralama (sorting) yetenekleri ekler (findAll(Pageable), findAll(Sort)). 4) JpaRepository<T, ID>: JPA spesifik ek metotlar ekler (flush, saveAndFlush, deleteInBatch, getOne). 5) QueryByExampleRepository: Example nesneleri ile dinamik sorgu desteği. 6) ReactiveRepository: Reaktif programlama desteği. Genellikle JpaRepository tercih edilir çünkü en geniş özellikleri sunar. Custom repository tanımlayarak kendi metotlarınızı da ekleyebilirsiniz."},
                  {"id": "query-methods", "text": "Sorgu Metotları", "description": "Spring Data JPA, metot isimlerinden otomatik olarak sorgu oluşturma özelliği sunar (Query derivation). Örneğin, 'findByEmailAndActive(String email, boolean active)' metodu, e-posta ve aktiflik durumuna göre sorgu yapar. Metot isimlendirme kuralları: find/get/read/query/count/By ile başlar. Properties ile devam eder: FindByFirstName. Koşulları And, Or ile birleştirir: FindByFirstNameAndLastName. Karşılaştırma operatörleri kullanır: GreaterThan, LessThan, Between, Like, StartingWith, EndingWith, Containing vb. OrderBy ile sıralama yapabilir: FindByAgeOrderByLastNameDesc. First, Top ile limit belirtebilir: FindFirst3ByOrderByDateDesc. Derived query'ler basit sorgular için idealdir ancak karmaşık sorgularda @Query kullanmak daha uygundur."},
                  {"id": "query-annotation", "text": "@Query ve @Modifying", "description": "@Query anotasyonu, metot isimlendirme yerine özel JPQL (Java Persistence Query Language) veya native SQL sorguları tanımlamayı sağlar. Karmaşık sorgular, join işlemleri veya aggregation fonksiyonları (@Query(\"SELECT COUNT(u) FROM User u WHERE u.active = true\")) için idealdir. Native SQL için @Query(value = \"SELECT * FROM users WHERE email = ?1\", nativeQuery = true) kullanılır. Parametreler iki şekilde belirtilebilir: 1) Pozisyon tabanlı: ?1, ?2 (JPQL) veya ? (native SQL). 2) İsim tabanlı: :email, :active. @Query ile birlikte veri modifikasyonu (UPDATE, DELETE) yapmak için @Modifying anotasyonu kullanılır. Modifying sorgular genellikle @Transactional içinde kullanılmalıdır. @Query'nin SpEL (Spring Expression Language) desteği vardır ve dinamik sorgu oluşturmaya olanak tanır."},
                  {"id": "projections", "text": "Projections", "description": "Spring Data JPA Projections, entity'lerin sadece belirli alanlarını getirmek için kullanılır. Bu, performansı artırır ve gereksiz veri transferini önler. Üç tip projection vardır: 1) Interface-based Projections: Sadece ihtiyaç duyulan alanları içeren bir interface tanımlanır (interface NameOnly { String getFirstName(); String getLastName(); }). 2) Class-based Projections (DTOs): Constructor injection ile DTO nesneleri oluşturulur. 3) Dynamic Projections: Generic tip parametreli metotlar ile farklı projection tipleri desteklenir (findBy...(<T> Class<T> type)). Closed projections, tam olarak entity alanlarına karşılık gelirken, open projections SpEL ile hesaplanmış özellikler içerebilir (@Value(\"#{target.firstName + ' ' + target.lastName}\") String getFullName();). Nested projections da desteklenir ve ilişkili entity'lerin belirli alanlarını getirmek için kullanılabilir."}
                ]
              },
              {
                "id": "entity-definition", 
                "text": "Entity (Varlık) Tanımlama", 
                "description": "JPA entity'leri, veritabanı tablolarıyla eşleşen Java sınıflarıdır. Entity'ler, ilişkisel veritabanı verileri ve nesne modelleri arasında köprü görevi görür ve ORM'in temelini oluşturur. Bir JPA entity'si, genellikle veritabanındaki bir tabloya karşılık gelir ve Java sınıfı ile veritabanı tablosu arasındaki eşleme bilgilerini içeren anotasyonlarla işaretlenir.",
                "subItems": [
                  {"id": "entity-annotations", "text": "Entity Anotasyonları", "description": "Entity tanımlamak için kullanılan temel JPA anotasyonları: @Entity: Bir sınıfın JPA entity'si olduğunu belirtir. @Table(name = \"users\"): Entity'nin eşleştiği veritabanı tablosunu belirtir. Name, schema, catalog gibi özellikler tanımlanabilir. @Id: Primary key alanını belirtir. @GeneratedValue(strategy = GenerationType.IDENTITY): Primary key oluşturma stratejisini belirtir. IDENTITY: Veritabanı otomatik artış. SEQUENCE: Veritabanı sequence kullanımı. TABLE: Özel bir tablo ile ID yönetimi. AUTO: JPA provider'ın karar vermesi. @Column(name = \"first_name\", length = 50, nullable = false): Alanın karşılık geldiği veritabanı kolonunu ve özelliklerini tanımlar. @Temporal(TemporalType.DATE): Tarih/zaman alanlarının nasıl saklanacağını belirtir. @Enumerated(EnumType.STRING): Enum değerlerinin nasıl saklanacağını belirtir (STRING veya ORDINAL). @Transient: Veritabanında saklanmayacak, geçici alanları belirtir."},
                  {"id": "relationship-types", "text": "İlişki Tipleri", "description": "Entity'ler arasındaki ilişkileri tanımlamak için kullanılan JPA anotasyonları: @OneToOne: Birebir ilişki. Örneğin, bir kullanıcının tek bir profili olması. @OneToMany: Birçoğa ilişki. Örneğin, bir departmanın birden fazla çalışanı olması. @ManyToOne: Çoktan bire ilişki. Örneğin, birden fazla çalışanın tek bir departmana ait olması. @ManyToMany: Çoktan çoğa ilişki. Örneğin, bir öğrencinin birden fazla kursa, bir kursun da birden fazla öğrenciye sahip olması. Bu ilişkiler, join column, join table gibi özelliklerle detaylandırılabilir ve bidirectional (çift yönlü) veya unidirectional (tek yönlü) olabilir. Her ilişki türü için uygun ilişki yönetimi stratejisi seçmek, uygulama performansı ve veri bütünlüğü açısından önemlidir."},
                  {"id": "relationship-details", "text": "İlişki Detayları", "description": "İlişkileri tanımlarken kullanılan ek özellikler: mappedBy: Bidirectional ilişkilerde, ilişkinin hangi tarafın 'sahibi' olduğunu belirtir. İlişkinin 'inverse' tarafında kullanılır ve ilişkinin sahibi entity'deki alanın adını içerir. Fetch Type: İlişkili entity'lerin ne zaman yükleneceğini belirler. LAZY: İlişkili entity'ler sadece ihtiyaç duyulduğunda yüklenir (default, @ManyToMany, @OneToMany, @ManyToOne için). EAGER: İlişkili entity'ler ana entity ile birlikte yüklenir (default, @OneToOne için). Lazy loading, N+1 sorgu problemi oluşturabilir ancak doğru fetch join'ler ile bu önlenebilir. Cascade Type: İlişkili entity'lere uygulanacak işlemleri belirtir. ALL: Tüm işlemler (persist, merge, remove, refresh, detach). PERSIST: Kaydetme işlemi. MERGE: Güncelleme işlemi. REMOVE: Silme işlemi. @JoinColumn: Foreign key kolonunu özelleştirir. @JoinTable: @ManyToMany ilişkilerinde kullanılan join tablosunu özelleştirir. @OrderBy: İlişkili koleksiyonların sıralanmasını sağlar."},
                  {"id": "embedded-entities", "text": "Gömülü Varlıklar", "description": "JPA, bir entity içinde başka bir nesnenin değerlerini gömmeye olanak tanır: @Embeddable: Bir sınıfın başka bir entity içine gömülebileceğini belirtir. Örneğin, Address sınıfı. @Embedded: Bir entity'de gömülü bir nesne alanı tanımlar. Örneğin, private Address homeAddress;. @AttributeOverride: Gömülü nesnenin alan adlarını özelleştirmek için kullanılır. @Version: Optimistic locking için kullanılır, entity güncellendiğinde otomatik olarak artar. @EmbeddedId: Composite primary key tanımlamak için kullanılır. Bu yaklaşımlar, domain driven design'da Value Object pattern'ini uygulamak ve tekrarlanan kod miktarını azaltmak için kullanışlıdır."}
                ]
              },
              {
                "id": "db-config", 
                "text": "Veritabanı Konfigürasyonu", 
                "description": "Spring Boot, veritabanı bağlantısını ve JPA yapılandırmasını application.properties veya application.yml dosyaları aracılığıyla kolayca yapılandırmayı sağlar. Spring Boot, otomatik yapılandırma (auto-configuration) özelliği sayesinde, classpath'te algıladığı veritabanı sürücüsüne göre DataSource'u otomatik olarak yapılandırır. Temel veritabanı yapılandırma özellikleri: 1) spring.datasource.*: Veritabanı bağlantı bilgileri (URL, username, password, driver-class-name). Örneğin: spring.datasource.url=jdbc:mysql://localhost:3306/mydb, spring.datasource.username=root, spring.datasource.password=secret. 2) spring.jpa.*: JPA ve Hibernate yapılandırması. spring.jpa.hibernate.ddl-auto: Schema oluşturma stratejisi (none, validate, update, create, create-drop). spring.jpa.show-sql: SQL sorguları loglamayı aktifleştirir. spring.jpa.properties.hibernate.*: Hibernate özel ayarları. spring.jpa.database-platform: Dialect belirleme. 3) spring.data.rest.*: Spring Data REST konfigürasyonu. 4) spring.h2.console.enabled=true: H2 veritabanı web konsolunu aktifleştirir (development ortamında). Üretim ortamında güvenli veritabanı yapılandırması için, şifre ve hassas bilgilerin dış kaynaktan (environment variables, config server) alınması, connection pool'un (HikariCP) doğru yapılandırılması ve transaction yönetimi için uygun izolasyon seviyesinin belirlenmesi önemlidir."
              }
            ]
          },
          {
            "id": "project-learning-2",
            "text": "Proje Üzerinden Öğrenme Önerileri (Devam)",
            "description": "Spring Data JPA ve veritabanı erişimi konularını pratikte uygulamak, teorik bilgiyi pekiştirmenin en etkili yoludur. Spring Boot ile birlikte kullanıldığında, veritabanı erişim katmanını hızlı bir şekilde geliştirmek ve test etmek mümkündür. Gerçek projelerdeki kullanım senaryoları ve best practice'ler üzerinden öğrenmek, mülakata hazırlık sürecini daha etkili hale getirir.",
            "subItems": [
              {
                "id": "project-exercises", 
                "text": "Proje Egzersizleri", 
                "description": "Veritabanı erişimi konusunda pratiğe dayalı egzersiz fikirleri: 1) REST API ve Veritabanı Entegrasyonu: Mevcut bir REST API'ye JPA entegrasyonu ekleyin veya sıfırdan oluşturun. Özellikle bir API endpoint eklemek ve bunu veritabanı işlemleriyle bağlamak, end-to-end akışı anlamanızı sağlar. 2) Entity İlişkileri: Farklı entity ilişkilerini (@OneToMany, @ManyToMany) uygulamak ve bu ilişkilerdeki yaygın hataları (N+1 sorunu, circular reference, infinite recursion in JSON serialization) deneyimlemek ve çözmek. 3) Custom Repository Metotları: JPA ile özel sorgu metotları oluşturmak, Named Queries, @Query anotasyonu kullanımı, native SQL sorguları yazmak. 4) JPQL ile Kompleks Sorgular: Join işlemleri, grup fonksiyonları, projection, sub-queries kullanan karmaşık sorgular yazın. 5) Veritabanı Migrasyonu: Flyway veya Liquibase ile schema migration uygulamak, veritabanı versiyonlama ve değişiklik yönetimi. 6) Data Validation: Entity seviyesinde Bean Validation kullanımı, custom validator'lar, unique constraint'ler. Bu egzersizleri, ideal olarak gerçek bir domain model (örn. e-ticaret sistemi, blog platformu) üzerinde yapmanız öğrenme sürecini daha anlamlı kılar."
              },
              {
                "id": "learning-topics-2", 
                "text": "Öğrenilecek Konular", 
                "description": "Spring Data JPA ile ilgili derinlemesine öğrenilmesi gereken konular: 1) Pageable ve Sayfalama: Page<T> nesnesi, Pageable parametresi, PageRequest oluşturma, sayfalama meta verilerini client'a iletme. Offset tabanlı sayfalama (page number & size) vs. Keyset Pagination (cursor based). 2) Sort ve Sıralama: Sort nesnesi oluşturma, birden fazla alanda sıralama, dinamik sıralama kriterleri. 3) Specification API: Kompleks ve dinamik sorgular için JPA Criteria API'yi kolayca kullanmanızı sağlayan Specification pattern. 4) Global Exception Handling: @ControllerAdvice ve @ExceptionHandler kullanarak tutarlı hata yanıtları oluşturma. @ResponseStatus, ResponseEntityExceptionHandler ve ExceptionTranslator implementasyonu. EntityNotFoundException, DataIntegrityViolationException, OptimisticLockingFailureException gibi yaygın exception'ların yönetimi. 5) Auditing: @CreatedDate, @LastModifiedDate, @CreatedBy, @LastModifiedBy ile entity değişikliklerini otomatik takip etme. @EnableJpaAuditing konfigürasyonu. 6) N+1 Query Problemi: Bu yaygın performans sorununun teşhisi ve çözümü. join fetch JPQL deyimi, @EntityGraph kullanımı, BatchSize optimizasyonu. 7) Transaction Yönetimi ve Propagation: @Transactional anotasyonu, isolation levels, propagation types. Bu konuları projeler üzerinde pratik yaparak ve ilgili Spring dokümantasyonunu inceleyerek öğrenmek, mülakatta bu konularda derinlemesine sorulara hazırlıklı olmanızı sağlar."
                  }
                ]
              }
            ]
          },
      "day3_morning": {
        "title": "İleri Konular ve Test (3. Gün Sabah)",
        "items": [
          {
            "id": "spring-ecosystem",
            "text": "Spring Ekosisteminden Önemli Konular",
            "description": "Spring ekosistemi, temel modüllerin ötesinde, kurumsal uygulamaların çeşitli ihtiyaçlarını karşılamak için geliştirilmiş zengin bir modül koleksiyonu sunar. Bu ileri düzey konular, Spring uygulamalarının güvenliğini, performansını, bakımını ve izlenebilirliğini artırır. Büyük ölçekli ve karmaşık uygulamaların geliştirilmesinde bu modüllerin etkin kullanımı, yazılım kalitesini ve geliştirme verimliliğini önemli ölçüde artırır.",
            "subItems": [
              {
                "id": "spring-security", 
                "text": "Spring Security Temelleri", 
                "description": "Spring Security, Java EE tabanlı kurumsal uygulamalar için kapsamlı bir güvenlik çözümüdür. Kimlik doğrulama (authentication) ve yetkilendirme (authorization) işlemlerini yönetir ve yaygın güvenlik tehditlerine karşı koruma sağlar. Temel bileşenler ve kavramlar: 1) SecurityFilterChain: HTTP isteklerini işleyen ve güvenlik kontrollerini uygulayan filtreler zinciri. HttpSecurity ile yapılandırılır. 2) Authentication vs Authorization: Authentication (kimlik doğrulama) kullanıcının kim olduğunu doğrular (login). Authorization (yetkilendirme) kullanıcının belirli kaynaklara erişim iznini kontrol eder. 3) UserDetailsService: Kullanıcı bilgilerini bir veri kaynağından (veritabanı, LDAP, vb.) yüklemekten sorumlu interface. Özel implementasyonlar oluşturulabilir. 4) PasswordEncoder: Parolaları güvenli bir şekilde hashlemek ve doğrulamak için kullanılır (BCryptPasswordEncoder yaygın kullanılır). 5) Güvenlik Yapılandırması: Java yapılandırması (@EnableWebSecurity, WebSecurityConfigurerAdapter) veya yeni versiyonlarda SecurityFilterChain bean'i. 6) Form Based Authentication, HTTP Basic, OAuth2/OIDC, LDAP gibi çeşitli kimlik doğrulama mekanizmaları. 7) Method Security: @PreAuthorize, @PostAuthorize, @Secured gibi anotasyonlarla metot seviyesinde güvenlik. 8) JWT (JSON Web Token): Stateless kimlik doğrulama ve yetkilendirme için token tabanlı yaklaşım. 9) CSRF, XSS, CORS gibi güvenlik önlemleri. Spring Security, ayrıntılı konfigürasyon imkanı ile farklı güvenlik senaryolarına uyarlanabilir."
              },
              {
                "id": "aop", 
                "text": "AOP (Aspect-Oriented Programming)", 
                "description": "AOP, Cross-Cutting Concerns (kesişen ilgiler) olarak adlandırılan ve uygulamanın birden çok bölümünü yatay kesen işlemleri (logging, transaction management, security, caching, error handling) modüler bir şekilde ele almayı sağlayan programlama paradigmasıdır. Spring AOP, proxy tabanlı bir yaklaşım kullanır ve AspectJ entegrasyonu sunar. Temel kavramlar: 1) Aspect: Cross-cutting concern'leri kapsayan modül (örn. LoggingAspect, TransactionAspect). 2) Join Point: Program yürütme sırasında belirli bir nokta (Spring AOP'de metot çağrıları). 3) Advice: Belirli bir join point'te yapılacak eylem (before, after, around, after-returning, after-throwing). 4) Pointcut: Hangi join point'lerin bir advice tarafından yakalanacağını tanımlayan ifade (@Pointcut(\"execution(* com.example.service.*.*(..))\")). 5) Weaving: Aspect'leri uygulama koduna entegre etme işlemi (Spring AOP runtime weaving kullanır). Spring AOP kullanım alanları: 1) Method execution logging. 2) Performance monitoring (metot çalışma süresi ölçümü). 3) Exception handling (merkezi hata yönetimi). 4) Transaction management (@Transactional). 5) Security checks (@PreAuthorize). 6) Caching (@Cacheable). 7) Retry logic (@Retryable). Spring AOP, Spring'in birçok özelliğinin (transaction, security) temelini oluşturur ve kod tekrarını azaltarak bakımı kolaylaştırır."
              },
              {
                "id": "spring-boot-actuator", 
                "text": "Spring Boot Actuator", 
                "description": "Spring Boot Actuator, production-ready özellikler ekleyerek uygulamanın çalışma durumunu izleme, metrikler toplama, audit bilgisi elde etme ve uzaktan yönetim imkanı sağlar. Bir Spring Boot uygulamasını operasyonel seviyede yönetmek için güçlü araçlar sunar. Temel özellikler: 1) Endpoints: Bilgi sağlayan ve yönetim işlevlerine izin veren HTTP veya JMX üzerinden erişilebilen noktalar. Önemli endpoint'ler: /health: Uygulamanın sağlık durumu. /info: Uygulama hakkında özel bilgiler. /metrics: Metrikler (memory, threads, http requests, vb.). /env: Yapılandırma özellikleri. /loggers: Loglama seviyelerini görüntüleme ve değiştirme. /mappings: Request mapping'leri gösterme. /beans: Tüm Spring bean'lerini listeler. /shutdown: Uygulamayı güvenli bir şekilde kapatır (varsayılan olarak devre dışı). 2) Health Indicators: Uygulamanın ve bağımlı sistemlerin sağlık durumunu raporlar (veritabanı, disk, vb.). 3) Metrics: Micrometer entegrasyonu ile uygulamanın performansını izleme (Prometheus, Graphite, DataDog, vb.). 4) Auditing: Kimin, ne zaman, neyi yaptığını takip etme. Actuator üretim ortamında güvenlik riskleri oluşturmaması için uygun şekilde yapılandırılmalı ve korunmalıdır (Spring Security entegrasyonu)."
              },
              {
                "id": "transaction-management", 
                "text": "Transaction Management", 
                "description": "Transaction management, veri bütünlüğünü korumak için bir dizi işlemin atomik bir birim olarak yürütülmesini sağlar. Spring, deklaratif (@Transactional) ve programatik (TransactionTemplate) transaction yönetimi sunar. ACID Özellikleri: Atomicity (Atomiklik): Tüm işlemler başarılı olur ya da hiçbiri olmaz. Consistency (Tutarlılık): İşlemler veritabanını tutarlı bir durumdan diğerine taşır. Isolation (İzolasyon): Eşzamanlı işlemlerin birbirini etkilememesi. Durability (Kalıcılık): Başarılı bir işlem kalıcı olarak kaydedilir. @Transactional kullanımı: Metot, sınıf veya interface seviyesinde kullanılabilir. Propagation seviyeleri: REQUIRED (default): Mevcut transaction varsa katılır, yoksa yeni oluşturur. REQUIRES_NEW: Her zaman yeni bir transaction oluşturur. SUPPORTS: Varsa transaction ile çalışır, yoksa transaction olmadan. MANDATORY: Transaction olmalıdır, yoksa exception fırlatır. NEVER: Transaction olmamalıdır. NOT_SUPPORTED: Transaction varsa askıya alır. NESTED: Mevcut transaction içinde nested transaction oluşturur. Isolation seviyeleri: DEFAULT: Veritabanı default'u. READ_UNCOMMITTED: En düşük izolasyon, dirty reads. READ_COMMITTED: Dirty reads önlenir, non-repeatable reads mümkün. REPEATABLE_READ: Aynı sorgular aynı sonucu verir. SERIALIZABLE: En yüksek izolasyon, seri transaction yürütme gibi. Timeout: İşlem süresi sınırı. ReadOnly: Salt okunur transaction optimizasyonu. Rollback kuralları: Hangi exception'larda rollback yapılacağı (rollbackFor, noRollbackFor). Etkin transaction yönetimi, özellikle finansal uygulamalarda veri bütünlüğü için kritik öneme sahiptir."
                }
             ]
          },
          {
            "id": "test-approaches",
            "text": "Test Yaklaşımları",
            "description": "Yazılım testleri, kod kalitesini artırır, hataları erkenden tespit eder ve refactoring güveni sağlar. Spring uygulamaları için test stratejileri, birim testlerden entegrasyon testlerine kadar geniş bir yelpazede yer alır. Spring Boot, test framework'leri ile entegrasyon sağlayarak test süreçlerini kolaylaştırır. Test Driven Development (TDD) veya Behavior Driven Development (BDD) yaklaşımları, kaliteli kod geliştirme sürecinin ayrılmaz bir parçasıdır.",
            "subItems": [
              {
                "id": "test-importance", 
                "text": "Testin Önemi, Test Piramidi", 
                "description": "Test piramidi, farklı test tipleri arasındaki ideal dengeyi gösteren bir modeldir. Tabandan tepeye doğru: 1) Unit Tests (Birim Testleri): Piramidin tabanını oluşturur. Tek bir bileşenin (genellikle bir sınıf/metot) işlevselliğini test eder. Hızlı, izole ve çok sayıda olmalıdır. Mocking/stubbing kullanılarak dış bağımlılıklar simüle edilir. 2) Integration Tests (Entegrasyon Testleri): Birden fazla bileşenin birlikte doğru çalıştığını doğrular. Gerçek veritabanı, dosya sistemi veya servislerle etkileşim içerebilir. Unit testlerden daha yavaştır. 3) Functional Tests (Fonksiyonel Testler): Uygulamanın belirli işlevselliklerini uçtan uca test eder. UI testi içerebilir. 4) End-to-End Tests (E2E): Piramidin tepesinde, tüm sistemi gerçek kullanıcı senaryolarıyla test eder. En yavaş ve en kırılgan testlerdir. İdeal test dağılımı: %70 Unit, %20 Integration, %10 E2E olarak önerilir. Testlerin faydaları: Regression tespiti, refactoring güveni, canlı dokümantasyon, tasarım iyileştirme. Test coverage (test kapsama alanı), testlerin kodun ne kadarını çalıştırdığını ölçer, ancak tek başına yeterli bir metrik değildir, test kalitesi de önemlidir."
              },
              {
                "id": "unit-testing", 
                "text": "Unit Testing (Birim Testler)", 
                "description": "Unit testler, kodun en küçük test edilebilir parçasının (genellikle bir metot) izole olarak doğru çalışıp çalışmadığını kontrol eder. Spring uygulamalarında, özellikle service katmanı gibi business logic içeren bileşenler için unit testler yazılması önemlidir. Unit test, Spring container'ı başlatmadan, test edilen bileşenin dış bağımlılıklarını mock'layarak gerçekleştirilir.",
                "subItems": [
                  {"id": "junit5", "text": "JUnit 5", "description": "Java için modern bir test framework'üdür. Üç alt projeden oluşur: JUnit Platform, JUnit Jupiter ve JUnit Vintage. Temel anotasyonlar: @Test: Test metotlarını belirtir. @BeforeEach, @AfterEach: Her test öncesi/sonrası çalışacak metotlar. @BeforeAll, @AfterAll: Tüm testler öncesi/sonrası bir kez çalışacak metotlar (static olmalı). @DisplayName: Test için özel isim tanımlama. @Disabled: Testi devre dışı bırakma. @ParameterizedTest: Parametreli testler. @Nested: İç içe test sınıfları. Assertions: assertEquals, assertTrue, assertFalse, assertThrows, assertAll, assertTimeout. Assumptions: assumeTrue, assumeFalse. Spring Boot Test Starter bağımlılığı JUnit 5'i otomatik olarak dahil eder ve yapılandırır."},
                  {"id": "mockito", "text": "Mockito", "description": "Java için popüler bir mocking framework'üdür. Testlerde dış bağımlılıkları (repositories, services, clients, vb.) simüle etmek için kullanılır. Temel kullanım: @Mock: Bağımlılıkları mock'lamak için. @InjectMocks: Mock'ları içeren test edilen sınıfı oluşturmak için. Mockito.mock(Class): Programatik mock oluşturma. when(mock.method()).thenReturn(value): Mock davranışı tanımlama (stubbing). when().thenThrow(): Exception fırlatma davranışı. doNothing().when(): Void metotlar için stub. verify(mock, times(n)).method(): Metot çağrı sayısını doğrulama. ArgumentCaptor: Metoda geçilen argümanları yakalama ve inceleme. BDDMockito: given().willReturn() gibi BDD tarzı sözdizimi sağlar. MockBean: Spring context içinde bean'leri mock'lamak için kullanılır."},
                  {"id": "service-tests", "text": "Servis Katmanı Testleri", "description": "Service sınıflarını test etmek için tipik bir yaklaşım: 1) Repository, client, diğer service gibi bağımlılıkları @Mock ile mock'la. 2) Test edilen service'i @InjectMocks ile oluştur. 3) Her test case için mock'ların davranışlarını when().thenReturn() ile tanımla. 4) Service metotunu çağır ve sonucu doğrula. 5) Gerekirse mock'ların doğru şekilde çağrıldığını verify() ile kontrol et. Örnek: Bir UserService.findByEmail() metodunu test ederken, userRepository mock'lanır ve mockRepository.findByEmail() için beklenen değer tanımlanır. Servis methodu çağrılır ve dönen sonuç beklenen değerle karşılaştırılır. Ayrıca metodun repository'yi doğru parametre ile çağırdığı doğrulanır."}
                ]
              },
              {
                "id": "integration-testing", 
                "text": "Integration Testing (Entegrasyon Testleri)", 
                "description": "Entegrasyon testleri, farklı bileşenlerin (controller, service, repository) birlikte doğru çalıştığını doğrular. Spring Boot, entegrasyon testleri için çeşitli anotasyonlar ve yardımcı sınıflar sunar. @SpringBootTest, tüm application context'i yükleyerek kapsamlı testler yapmayı sağlar. WebEnvironment.RANDOM_PORT veya WebEnvironment.MOCK ile web ortamı simüle edilebilir. TestRestTemplate veya WebTestClient ile HTTP istekleri gönderilebilir. MockMvc, web katmanını izole test etmek için kullanılır (@WebMvcTest ile birlikte). @DataJpaTest, repository katmanını test etmek için JPA bileşenlerini yapılandırır, genellikle in-memory veritabanı (H2) kullanır. @TestConfiguration, test için özel bean'ler tanımlamaya yarar. Diğer test anotasyonları: @AutoConfigureMockMvc, @AutoConfigureTestDatabase, @ActiveProfiles, @DirtiesContext. Entegrasyon testleri, gerçek veritabanı, mesaj kuyrukları, dosya sistemi gibi dış sistemlerle etkileşimi test edebilir, bu da unit testlerden daha kapsamlı ancak daha yavaş testler oluşturur."
              }
            ]
          }
        ]
      },
      "day3_afternoon": {
        "title": "Diğer Teknolojiler ve CV Hazırlığı (3. Gün Öğleden Sonra)",
        "items": [
          {
            "id": "other-technologies",
            "text": "CV'de Bahsedilen Diğer Teknolojiler",
            "description": "Modern yazılım geliştirme ekosisteminde, birden fazla teknoloji ve framework'ü anlamak, bir yazılım mühendisinin adaptasyon yeteneğini ve teknik vizyonunu gösterir. Spring dışındaki teknolojilere aşinalık, sistem mimarisi kararlarında daha bilinçli seçimler yapabilmeyi sağlar ve farklı yaklaşımların güçlü ve zayıf yönlerini anlamaya yardımcı olur. Big data ve stream processing gibi alanlardaki deneyim, özellikle fintech sektöründe değerlidir.",
            "subItems": [
              {
                "id": "apache-kafka", 
                "text": "Apache Kafka", 
                "description": "Apache Kafka, yüksek performanslı, düşük gecikmeli, fault-tolerant bir distributed streaming platform'dur. LinkedIn'de geliştirilen ve şimdi Apache Software Foundation tarafından yönetilen Kafka, başta log aggregation için tasarlanmış olsa da, günümüzde event-driven mimarilerin ve real-time streaming uygulamalarının vazgeçilmez bir bileşeni haline gelmiştir. Temel kavramlar: 1) Producer: Mesajları Kafka'ya gönderen uygulamalar. 2) Consumer: Kafka'dan mesajları okuyan uygulamalar. Consumer group'lar sayesinde, aynı mesajın birden fazla servis tarafından işlenmesi engellenebilir. 3) Topic: Mesajların kategorize edildiği kanallar. Her topic birden çok partition'a bölünebilir. 4) Partition: Mesajların depolandığı, sıralı ve immutable log'lar. Partitioning, Kafka'nın ölçeklenebilirliğinin temelidir. 5) Broker: Kafka cluster'ını oluşturan sunucular. 6) Zookeeper: Broker'ların koordinasyonunu sağlar, metadata bilgilerini tutar (yeni versiyonlarda KRaft kullanılabilir). 7) Offset: Consumer'ların mesajları takip etmesini sağlayan işaretçiler. Kafka'nın avantajları: Yüksek throughput, düşük gecikme, fault-tolerance (replication), dağıtık yapı, ölçeklenebilirlik, mesaj kalıcılığı, ekosistem entegrasyonu. Kullanım alanları: Messaging systems, activity tracking, metrics collection, log aggregation, stream processing, event sourcing, commit logs. Spring ile entegrasyonu: Spring Kafka, Kafka'yı Spring ekosistemiyle kolayca entegre etmeyi sağlar (@KafkaListener, KafkaTemplate vb.)."
              },
              {
                "id": "apache-flink", 
                "text": "Apache Flink", 
                "description": "Apache Flink, distributed stream ve batch processing framework'üdür. \"Streaming first, batch second\" felsefesiyle geliştirilen Flink, gerçek zamanlı veri işleme için optimize edilmiştir ve batch processing'i streaming'in özel bir durumu olarak ele alır. Temel kavramlar: 1) DataStream API: Stream processing için yüksek seviyeli API. 2) DataSet API: Batch processing için API (Streaming API alternatifi). 3) Sources: Verilerin Flink'e nasıl girdiğini tanımlayan konnektörler (Kafka, Kinesis, Files, Socket vb.). 4) Sinks: İşlenmiş verilerin nereye gönderileceğini tanımlayan konnektörler (HDFS, Elasticsearch, Kafka, Databases vb.). 5) Transformations: map, filter, reduce, window gibi veri dönüşüm operasyonları. 6) Stateful Computations: Durum bilgisi tutan (stateful) işlemler. Flink'in en güçlü özelliği, state yönetimidir. 7) Time Semantics: Event Time, Processing Time, Ingestion Time - Flink'in zaman kavramları. 8) Windowing: Veri akışını zaman veya sayı bazlı pencereler halinde gruplamak. 9) Checkpointing: Fault-tolerance için durumun kaydedilmesi. Flink'in avantajları: Gerçek zamanlı işleme, exactly-once semantics, geri basınç (backpressure) yönetimi, düşük gecikme, yüksek throughput, karmaşık event pattern tanıma yeteneği, hata toleransı. Kullanım alanları: Real-time analytics, continuous ETL, anomaly detection, pattern detection, event-driven applications. Spring ile entegrasyonu: Spring Data Flink veya doğrudan Flink API'leri Spring uygulamalarında kullanılabilir."
              },
              {
                "id": "framework-comparison", 
                "text": "Django & .NET Karşılaştırması", 
                "description": "Farklı teknoloji stack'lerini karşılaştırmak, her birinin güçlü ve zayıf yönlerini anlayarak projeler için en uygun çözümü seçmeyi sağlar. Django (Python), .NET (C#) ve Spring Boot (Java) karşılaştırması: Django: Python tabanlı, 'Batteries included' felsefesiyle gelen, hızlı geliştirme odaklı bir web framework'üdür. Admin paneli, ORM, authentication gibi birçok özellik built-in gelir. Prototipler ve içerik ağırlıklı siteler için idealdir. AI/ML entegrasyonu Python ekosistemi sayesinde kolaydır. Monolitik mimariye daha uygundur. .NET: Microsoft'un C# tabanlı, cross-platform framework'üdür. Enterprise dünyasında yaygın kullanılır. Visual Studio IDE entegrasyonu güçlüdür. Entity Framework Core, Razor Pages, Blazor gibi güçlü bileşenleri vardır. Windows ekosistemi ile uyumludur. Güçlü tip sistemi ve compiler-time güvenliği sağlar. Kurum içi çözümler için sıkça tercih edilir. Spring Boot: Java ekosistemi içinde Enterprise standartlarını benimseyen, modüler yapıda bir framework'tür. Fortune 500 şirketlerinde yaygın kullanılır. Geniş ekosistem ve büyük community desteği vardır. Microservice mimariler için güçlü destek sağlar. Konfigürasyon esnekliği ve kapsamlı entegrasyon olanakları sunar. JVM dilleri (Java, Kotlin, Groovy) ile kullanılabilir. Her birinin performans özellikleri, ölçeklenebilirlik özellikleri ve geliştirme hızı farklıdır. Birden fazla dil ve framework bilmek, projeye özgü en uygun teknolojiyi seçme esnekliği sağlar ve problem çözme yeteneğini genişletir."
              }
            ]
          },
          {
            "id": "project-learning-3",
            "text": "Proje Üzerinden Öğrenme Önerileri (İleri Seviye)",
            "description": "İleri seviye Spring Boot özellikleri ve entegrasyon senaryolarını gerçek projeler üzerinde pratik yaparak öğrenmek, teorik bilgiyi pekiştirmenin ve mülakat sorularına somut örneklerle cevap verebilmenin en iyi yoludur. Örnek projeler geliştirmek, GitHub'da açık kaynak projelere katkıda bulunmak veya kendi projelerinizi geliştirmek teknik derinliği artırır.",
            "subItems": [
              {
                "id": "advanced-exercises", 
                "text": "İleri Seviye Egzersizler", 
                "description": "İleri seviye Spring Boot becerilerinizi geliştirmek için önerilen proje egzersizleri: 1) Test Coverage Geliştirme: Mevcut bir Spring Boot projesinde unit ve integration test coverage'ını artırma. JUnit 5, Mockito ve MockMvc teknolojilerini kullanarak çeşitli test senaryoları oluşturma. 2) Actuator Endpoint Ekleme: Custom Actuator endpoint'leri geliştirerek uygulamanın izlenebilirliğini artırma. Prometheus, Grafana gibi monitoring araçlarıyla entegrasyon sağlama. 3) API Documentation: Swagger/OpenAPI kullanarak kapsamlı API dokümantasyonu oluşturma. 4) Caching: Redis veya Hazelcast ile caching implementasyonu. @Cacheable, @CacheEvict, @CachePut anotasyonlarını kullanma. 5) Asenkron İşleme: @Async, CompletableFuture, WebFlux kullanarak asenkron işlemleri uygulama. 6) Security Implementasyonu: JWT authentication, OAuth2 akışları, method-level security kuralları. 7) CI/CD Pipeline: GitHub Actions, Jenkins veya GitLab CI kullanarak otomatik build, test ve deploy pipeline'ı oluşturma. 8) Dockerization: Çok katmanlı Docker imajları ve docker-compose kullanarak uygulamanın container'ize edilmesi. 9) Microservice Patterns: Circuit Breaker, API Gateway, Service Discovery, Configuration Server gibi microservice pattern'lerini implementasyon. Bu egzersizleri GitHub'a yükleyip portföyünüze ekleyebilirsiniz."
              },
              {
                "id": "learning-topics-3", 
                "text": "Öğrenilecek Konular", 
                "description": "İleri seviye Spring konuları: 1) Spring Security: Authentication (JWT, OAuth2/OIDC), Authorization, Method Security implementasyonu. Güvenlik konfigürasyonu ve SecurityContext kullanımı. Custom authentication provider ve filter chain yapılandırmaları. 2) @Transactional: Transaction sınırları, propagation modes ve isolation levels. Read-only transactions ve performans optimizasyonları. Declarative vs programmatic transaction management. Transaction rollback kuralları. 3) Spring Profiles: Farklı ortamlar için (dev, test, prod) özelleştirilmiş konfigürasyonlar oluşturma. @Profile kullanımı ve active profile belirleme yöntemleri. 4) Spring Boot Admin: Uygulamaları izleme ve yönetme aracı. Actuator endpoint'lerini görselleştirme ve izleme. 5) Spring Cloud: Microservice mimarileri için çözümler (Config Server, Service Discovery, API Gateway, Circuit Breaker). 6) Spring Batch: Büyük veri setleri üzerinde batch processing işlemleri. Job, Step, ItemReader/ItemWriter kavramları. 7) Spring Integration: Enterprise Integration Patterns (EIP) uygulaması. Mesaj tabanlı sistemler için çözümler. Bu konuları derinlemesine anlamak, karmaşık kurumsal uygulamaların geliştirilmesi ve sürdürülmesi için gerekli becerileri kazandırır."
              }
            ]
          }
        ]
      },
      "day3_evening": {
        "title": "CV ve Mülakat Hazırlığı (3. Gün Akşam)",
        "items": [
          {
            "id": "softtech-internship",
            "text": "Softtech Staj Deneyimi - Teknik Derinlemesine",
            "description": "Staj deneyiminizden edindiğiniz teknik beceriler, kurum kültürü anlayışı ve gerçek dünya yazılım geliştirme pratikleri hakkındaki gözlemleriniz, işverenlere ekibe nasıl uyum sağlayacağınız ve mevcut deneyiminizi nasıl uygulayabileceğiniz konusunda fikir verir. Staj deneyiminizi Spring ve Java ekosistemi perspektifinden anlatmak, bu pozisyona transferable skills'lerinizi vurgulamanıza yardımcı olur.",
            "subItems": [
              {
                "id": "pos-systems", 
                "text": "POS Ödeme Sistemleri Geliştirmesi", 
                "description": "Kredi kartı altyapı ekibinde POS ödeme sistemleri geliştirme deneyiminizi, Java/Spring dünyasına aktarılabilir yönleriyle anlatabilirsiniz: 1) Ödeme sistemlerinin mimari yapısı ve modüler tasarım yaklaşımı. 2) FinTech sektöründe güvenlik standartları ve PCI-DSS gibi compliance gereksinimleri. 3) Transaction management ve ACID prensiplerinin önemi. 4) Fault-tolerance ve idempotency gibi güvenilirlik sağlayıcı pattern'ler. 5) High-availability sistemler için mimari yaklaşımlar. 6) Integration testing ve end-to-end test senaryoları. .NET'teki deneyiminizin Java/Spring dünyasındaki karşılıklarını (ASP.NET MVC <-> Spring MVC, Entity Framework <-> Spring Data JPA, Dependency Injection pattern) belirterek, öğrenme çevikliğinizi ve farklı teknolojiler arasında bağlantılar kurabilme yeteneğinizi gösterebilirsiniz."
              },
              {
                "id": "tools-usage", 
                "text": "Jira ve Azure DevOps Kullanımı", 
                "description": "ALM (Application Lifecycle Management) araçlarıyla çalışma deneyiminiz, kurumsal yazılım geliştirme süreçlerine aşinalığınızı gösterir: 1) Agile/Scrum metodolojilerini uygulama deneyimi (sprint planlama, daily stand-up, retrospektif toplantıları). 2) User story'leri anlama, breaking down ve effort estimation teknikleri. 3) Git workflow pratikleri (branch strategy, commit conventions, pull request review process). 4) CI/CD pipeline'ları anlama ve kullanma (build, test, deploy automation). 5) Code review kültürü ve feedback mekanizmaları. Bu deneyiminiz, Spring ekosisteminde benzer araçlarla (GitHub, GitLab, Jenkins, SonarQube) çalışma yeteneğinizi gösterir ve ekip içi işbirliği becerilerinizi vurgular."
              },
              {
                "id": "enterprise-dev", 
                "text": "Kurumsal Düzeyde Yazılım Geliştirme", 
                "description": "Kurumsal düzeyde yazılım geliştirme deneyiminizi, bir bankada çalışmanın gerektirdiği standartlar açısından değerlendirebilirsiniz: 1) Code quality standartları ve static code analysis araçları kullanımı. 2) Documentation kültürü ve knowledge sharing pratikleri. 3) Performance optimization ve ölçeklenebilirlik yaklaşımları. 4) Monitoring, logging ve troubleshooting stratejileri. 5) Legacy code ile çalışma ve refactoring teknikleri. 6) Cross-functional takımlarla iletişim (DevOps, QA, BA, Product Owner). 7) Requirement analysis ve teknik şartname anlama becerileri. Bu deneyimler, Spring temelli bir projeye hızla adapte olabileceğinizi ve kurumsal best practice'leri uygulayabileceğinizi gösterir."
              }
            ]
          },
          {
            "id": "tech-competencies",
            "text": "Teknoloji Yetkinlikleri ve Projeler",
            "description": "CV'nizde belirttiğiniz teknoloji yetkinlikleri ve projeleriniz, teknik bilgi ve becerilerinizi somut örneklerle destekleyen önemli unsurlardır. Mülakatta bu yetkinlikler ve projeler hakkında detaylı sorular sorulabilir. Bildiğiniz farklı diller ve teknolojilerin güçlü yönlerini ve Java ekosistemiyle nasıl entegre edilebileceğini anlatmak, teknik vizyonunuzu gösterir ve çeşitli problemleri çözme yaklaşımınızı vurgular.",
            "subItems": [
              {
                "id": "multiple-languages", 
                "text": "Çoklu Dil Deneyimi (Python, Java, C#)", 
                "description": "Farklı programlama dillerine hakim olmanızın, Java dünyasında çalışan bir developer olarak sağlayacağı avantajlar: 1) Farklı paradigmalar arası geçiş yapabilme yeteneği (OOP, functional programming, scripting). 2) Dil sınırlamaları ve güçlü yönlerine dair farkındalık. Java'nın type-safety, JVM ekosistemi, kurumsal standartlardaki güçlü yönleri. 3) Polyglot microservice mimarilerinde farklı dilleri uygun yerlerde kullanabilme. 4) Her dilin en iyi kullanıldığı yerler: Java/Spring için backend services, C# için Windows ekosistemi, Python için data analysis, AI/ML, scripting. 5) Öğrenme transferi: Bir dilde öğrenilen pattern ve prensiplerin diğer dillere aktarılması. 6) Cross-language integration senaryoları: Java backend ile Python ML modellerinin entegrasyonu, REST API üzerinden farklı dillerdeki servislerin haberleşmesi. 7) Trade-off analizi: Her dilin performans, memory usage, developer productivity açısından artı ve eksileri. Çoklu dil bilmek, kurumsal mimarilerde 'doğru araç için doğru iş' prensibiyle kararlar verebilme yetkinliği sağlar."
              },
              {
                "id": "kafka-flink", 
                "text": "Apache Kafka ve Apache Flink Deneyimi", 
                "description": "Big data processing ve stream processing deneyiminiz, özellikle finans sektöründe dijital dönüşüm projelerinde değerlidir: 1) Real-time Data Processing Patterns: Event sourcing, CQRS, stream-table duality kavramları. 2) Örnek Use-Case'ler: Real-time fraud detection, transaction monitoring, customer behavior analytics, real-time dashboard. 3) Scaling ve Performance Tuning: Throughput optimizasyonu, latency yönetimi, partition strategy. 4) Fault-Tolerance ve Recovery: Exactly-once processing, checkpointing, state management. 5) Kafka Connect ve Stream Processing Patterns: CDC (Change Data Capture), transformasyon, aggregation, windowing. 6) Spring Cloud Stream ve Spring Kafka ile entegrasyon: @KafkaListener, KafkaTemplate, Kafka Streams DSL. 7) pykafka ve pyflink kütüphanelerindeki deneyiminizi Java ekosistemi karşılıklarına transfer etme. 8) Monitoring ve Operasyon: Consumer lag monitoring, platform health checking, alerting. Big data ekosistemindeki deneyim, banking uygulamalarında large-scale data processing ihtiyaçlarını anlama ve çözme konusunda avantaj sağlar."
              },
              {
                "id": "framework-comparison-2", 
                "text": "Django ve .NET ile Spring Boot Karşılaştırması", 
                "description": "Farklı framework'lerle deneyiminiz, Spring Boot'u diğer alternatiflerle karşılaştırarak güçlü ve zayıf yönlerini daha iyi anlamanızı sağlar: 1) Development Speed: Django'nun admin panel, ORM, batteries-included yaklaşımına karşı, Spring Boot'un starter dependency'leri ve auto-configuration avantajı. 2) Performance: Spring Boot'un JVM optimizasyonları ve reactive programming desteği. 3) Ecosystem: Spring'in geniş modül koleksiyonu (Security, Data, Cloud, Batch, Integration) ve third-party library entegrasyonu. 4) Enterprise Features: Transaction management, AOP, comprehensive security options gibi kurumsal özelliklerde Spring'in gücü. 5) Cloud-Native: Spring Cloud ile microservice pattern'leri implementasyonu. 6) Scaling: Spring WebFlux ile asenkron, non-blocking I/O ve reactive programming. 7) Testing: Spring Test framework'ün sunduğu kapsamlı test altyapısı. 8) Community ve Support: Büyük community, düzenli updates, ticari destek seçenekleri. Bu karşılaştırma, bir Java developer olarak Spring'in değerini daha net anlatabilmenizi sağlar."
              }
            ]
          },
          {
            "id": "behavioral-questions",
            "text": "Davranışsal Sorular ve CV Diğer Yetenekler",
            "description": "Davranışsal mülakat soruları, teknik becerilerinizin ötesinde, ekip dinamiklerine nasıl uyum sağlayacağınızı, zorluklarla nasıl başa çıktığınızı ve kariyer hedeflerinizi değerlendirir. Bu sorulara STAR (Situation, Task, Action, Result) formatında cevaplar hazırlamak faydalıdır. CV'nizdeki teknik olmayan ancak yazılım geliştirme süreçlerine pozitif katkı sağlayabilecek yetenekleriniz de öne çıkarılmalıdır.",
            "subItems": [
              {
                "id": "chess-programming", 
                "text": "Satranç Deneyiminin Yazılım Geliştirmeye Etkisi", 
                "description": "Satranç geçmişiniz ile yazılım geliştirme becerileri arasında kurulabilecek bağlantılar: 1) Stratejik Düşünme: Uzun vadeli planlama, potansiyel sonuçları analiz etme ve alternatif çözüm yollarını değerlendirme. 2) Pattern Recognition: Bilinen yapıları tanıma ve farklı durumlara uygulama yeteneği (design patterns ile benzerlik). 3) Analitik Problem Çözme: Karmaşık problemleri daha küçük, yönetilebilir parçalara ayırma (decomposition). 4) Adaptasyon: Değişen durumlara göre strateji güncelleme ve pivot yapabilme. 5) Hata Analizi: Kendi oyununuzdaki hataları tespit etme ve optimizasyon (code review ve refactoring benzerliği). 6) Sabır ve Odaklanma: Zor problemler üzerinde uzun süre çalışabilme yeteneği. Bu yetenekler özellikle mimari tasarım, algoritma geliştirme ve karmaşık business logic implementasyonunda avantaj sağlar."
              },
              {
                "id": "motivation", 
                "text": "XXXX Bankası'nda Çalışma Motivasyonu", 
                "description": "Bankaya özgü çalışma motivasyonunuzu anlatan noktalar: 1) Teknoloji Stack'i: Spring Boot, Microservices, Cloud technologies kullanımı ve bunlara olan ilginiz. 2) FinTech Innovation: Dijital bankacılık, open banking, ve financial services modernizasyonu projelerinde yer alma isteği. 3) Kurumsal Kültür: İş-yaşam dengesi, continuous learning opportunities, kariyerde ilerleme imkanları. 4) Çalışma Ortamı: Cross-functional teams, agile methodology, collaborative environment. 5) Şirketin Sektördeki Konumu: Teknolojik dönüşüm, dijital innovation ve banking sector'daki liderlik pozisyonu. 6) İş Etkisi: Milyonlarca kullanıcı tarafından kullanılan sistemler geliştirmenin getirdiği responsibility ve impact. 7) Teknik Mükemmellik: High availability, security, scalability gerektiren sistemlerde çalışma fırsatı. 8) Kişisel Gelişim: Kurumsal yapıda sunulan eğitim ve mentorship olanakları."
              },
              {
                "id": "team-work", 
                "text": "Takım Çalışması ve Fikir Ayrılıkları", 
                "description": "Teknik konularda fikir ayrılıklarını çözme yaklaşımınızı gösteren bir senaryoda vurgulanabilecek noktalar: 1) Active Listening: Karşı görüşü tüm detaylarıyla anlama çabası. 2) Data-Driven Approach: Kişisel tercihler yerine veriye dayalı karar verme. 3) Proof of Concept (PoC): Farklı yaklaşımları küçük prototiplerle test etme. 4) Trade-off Analysis: Her yaklaşımın artı/eksi yönlerini objektif olarak değerlendirme (performance, maintainability, development speed). 5) Consensus Building: Ortak bir karara varmak için uzlaşı noktaları arama. 6) Escalation Path: Gerektiğinde technical lead veya architect'e danışma. 7) Documentation: Alınan kararın gerekçeleriyle belgelenmesi. 8) Retrospective: Sonuçları değerlendirme ve lessons learned oluşturma. Bu yaklaşım, teknik mükemmelliği korurken ekip uyumunu da güçlendirir."
              },
              {
                "id": "learning-method", 
                "text": "Yeni Teknoloji Öğrenme Yöntemi", 
                "description": "Yeni bir teknoloji öğrenirken kullandığınız etkin yöntemler: 1) Resmi Dokümantasyon: Öncelikle resmi kaynakları detaylı inceleme. 2) Hands-on Approach: 'Hello World' dan başlayarak giderek karmaşıklaşan örnekler geliştirme. 3) Project-Based Learning: Gerçek dünya problem çözümüne yönelik küçük projeler oluşturma. 4) Community Resources: Stack Overflow, GitHub discussions, Medium articles, YouTube tutorials gibi topluluk kaynaklarından faydalanma. 5) Pair Programming/Code Review: Deneyimli kişilerle çalışma ve feedback alma. 6) Spaced Repetition: Öğrenilen bilgileri belirli aralıklarla tekrarlama ve pekiştirme. 7) Teaching Others: Öğrendiklerinizi başkalarına anlatarak bilgiyi derinleştirme. 8) Progressive Complexity: Basitten karmaşığa doğru ilerleyen bir öğrenme yolu izleme. Bu yaklaşım, sürekli değişen teknoloji dünyasında hızlı adaptasyon sağlar."
              },
              {
                "id": "career-vision", 
                "text": "Kariyer Vizyonu", 
                "description": "Önümüzdeki 3-5 yıllık kariyer hedefinizde vurgulanabilecek teknik yönelimler: 1) Technical Depth: Spring ekosisteminde uzmanlaşma (Spring Cloud, Spring Security, reactive programming). 2) Architecture Knowledge: Microservices, event-driven architecture, domain-driven design konularında derinleşme. 3) Cloud Expertise: AWS/Azure/GCP platformlarında uygulama mimarisi ve deployment stratejileri. 4) DevOps Integration: CI/CD pipeline optimization, Infrastructure as Code (IaC), container orchestration. 5) Performance Engineering: Application performance tuning, profiling, memory optimization. 6) Technical Leadership: Junior developers için mentorship, architecture decision making, technical roadmap planning. 7) Full Stack Development: Frontend technologies (Angular/React) ile backend entegrasyonu. 8) Specialized Domains: Fintech, payment systems, banking regulations alanlarında domain expertise. Bu kariyer vizyonu, hem teknik derinliği hem de genişliği içerir ve bankacılık sektöründe değerli olacak bir yetkinlik seti sunar."
              }
            ]
          },
          {
            "id": "interview-closing",
            "text": "Mülakat Kapanışı",
            "description": "Mülakat sonunda sorulabilecek sorular ve kapanış stratejisi, görüşmenin etkili bir şekilde tamamlanmasını sağlar. Son izlenimin güçlü olması, mülakat sürecindeki performansınızın genel değerlendirmesini olumlu etkileyebilir. Bu bölümde, sorularınızı ve final değerlendirmenizi profesyonel ve içten bir şekilde sunmak önemlidir.",
            "subItems": [
              {
                "id": "questions-to-ask", 
                "text": "Mülakatta Sorulacak Sorular", 
                "description": "Mülakat sonunda sorulabilecek, araştırma yaptığınızı ve şirkete olan ilginizi gösteren sorular: 1) \"Teknoloji ekibinizin mevcut Spring Boot kullanımı hakkında bilgi verebilir misiniz? Microservices mimarisi kullanıyor musunuz, yoksa monolithic uygulamalar mı geliştiriyorsunuz?\" 2) \"XXXX Bankası'nın dijital dönüşüm stratejisinde, bu pozisyonun rolü nedir? Hangi projelerde görev alabilirim?\" 3) \"Ekibinizde continuous integration/continuous deployment süreçleri nasıl işliyor? Hangi araçları kullanıyorsunuz?\" 4) \"Agile metodolojileri nasıl uyguluyorsunuz? Scrum, Kanban veya başka bir yaklaşım mı tercih ediyorsunuz?\" 5) \"Ekipte junior ve senior developer'ların dağılımı nasıl? Mentorship programınız var mı?\" 6) \"Bankacılık regülasyonlarının yazılım geliştirme süreçlerinize nasıl bir etkisi var?\" 7) \"Takımınızın son zamanlardaki en büyük teknik başarısı/zorluğu neydi?\" 8) \"Kişisel ve profesyonel gelişim için ne tür olanaklar sunuyorsunuz?\" Bu sorular, hem teknik derinliğinizi hem de şirket kültürüne olan ilginizi gösterir."
              },
              {
                "id": "final-pitch", 
                "text": "Final Değerlendirme", 
                "description": "Mülakat kapanışında, neden sizin bu pozisyon için ideal aday olduğunuzu özetleyen bir kapanış cümlesi hazırlayın: \"XXXX Bankası'nın teknoloji ekibine katılmak için hem teknik yeteneklerimi hem de finans sektöründeki deneyimimi kullanabileceğim bir fırsat olarak görüyorum. Softtech'teki stajım sırasında finans teknolojileriyle çalışma deneyimim, farklı programlama dilleri ve framework'lerdeki bilgim, ve stream processing alanındaki uzmanlığım bu pozisyonda hızla değer yaratmamı sağlayacaktır. Ayrıca, sürekli öğrenmeye olan tutkum ve ekip çalışmasına verdiğim önem, bankacılık sektöründeki hızlı değişimlere adapte olmamı kolaylaştıracaktır. Ekibinize hem teknik katkıda bulunmak hem de projelerin başarısı için tam sorumluluk almak konusunda çok istekliyim.\" Bu tür güçlü bir kapanış, mülakatçıda olumlu ve kalıcı bir izlenim bırakır."
              }
             ]
          }
        ]
      }
    }
  }
};
