import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableHighlight,
  Image,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const ListCard = ({ cardObj }) => {
  const navigation = useNavigation();
  const [lists, setList] = useState([
    {
      id: "1",
      story:"https://cf.shopee.vn/file/bfc963c6c5997120a0901f731610bafe",
      title: "Tài liệu chuyên toán - Hình học 12 ",
      author: "Đoàn Quỳnh",
      category: 'Sách tham khảo',
      left: '07',
      description: 'Bộ sách này phục vụ cho việc dạy và học ở hệ chuyên Toán, gắn với chương trình và sách giáo khoa Toán nâng cao nhằm giúp học sinh có thể chuyển đổi từ việc học hệ chuyên sang hệ không chuyên và ngược lại. Tài liệu giúp học sinh các lớp chuyên tự học; giúp học sinh khá giỏi ở các lớp đại trà có tài liệu để có thể tự học, tự bồi dưỡng thêm tại nhà.',
    },
    {
      id: "2",
      story:"https://cf.shopee.vn/file/65ec34dd140ddfffac82696b460353a5",
      author: "Đoàn Quỳnh",
      category: 'Sách tham khảo',
      left: '22',
      description: [
        'Nội dung gồm có:\n',
        'Chương 1. Ứng dụng giới hạn và đạo hàm để khảo sát và vẽ đồ thị\n',
        'Chương 2. Hàm số luỹ thừa, hàm số mũ, hàm số logarit\n',
        'Chương 3. Nguyên hàm, tích phân và ứng dụng\n',
        'Chuyên đề 1. Phương pháp chứng minh bất đẳng thức\n',
        'Chuyên đề 2. Phương trình hàm\n',
        'Chuyên đề 3. Một số vấn đề bổ sung chương nguyên hàm, tích phân, ứng dụng\n',
        'Chuyên đề 4. Số học\n',
      ],
      title: "Tài liệu chuyên toán - Hình học 11",

    },
    {
      id: "3",
      story: "https://wiseenglish.edu.vn/wp-content/uploads/2022/01/CAMBRIDGE-IELTS-17.jpg",
      author: "Nhiều tác giả",
      category: 'Sách luyện thi',
      left: '10',
      description: 'Gọi là sách, nhưng trên thực tế, cuốn Cambridge IELTS 17 giống một bộ đề thi hơn. Nó chỉ cung cấp các bài Practice Test (theo đúng chuẩn format của bài thi thật) và các đáp án đi kèm, chứ hoàn toàn không đưa ra các hướng dẫn hay mẹo làm bài. \n Cuốn Cambridge IELTS 17 bao gồm 4 đề thi thử cho cả 4 kỹ năng (Nghe, Đọc, Viết và Nói). Mỗi đề thi thử đều được biên soạn một cách cẩn thận, làm sao để cho các đề thi này có format giống đề thi thật nhất có thể.',
      title: "Cambridge ielts 17",

    },
    {
      id: "4",
      story:
        "https://wiseenglish.edu.vn/wp-content/uploads/2021/04/cam-16.jpg",
      author: "Nhiều tác giả",
      category: 'Sách luyện thi',     
      left: '08',
      description: 'Cambridge IELTS 16 đang là cuốn sách được các sĩ tử IELTS mong chờ nhất, đây là phiên bản mới nhất 2021 bao gồm ebook + audio, giúp bạn ôn luyện ielts một cách hiệu quả nhất cho kỳ thi. Đây sẽ là các bộ đề thi mẫu chi tiết theo form của đề thi thật được viết bởi chính những giám khảo chấm thi IELTS.',
      title: "Cambridge ielts 16",

    },
    {
      id: "5",
      story:
        "https://edutrip.edu.vn/wp-content/uploads/2021/01/Bia-Cam-15-Moi-2021.jpg",
      author: "Nhiều tác giả",
      category: 'Sách luyện thi',     
      left: '12',
      description: 'Cuốn sách Cambridge IELTS 15 cung cấp cho người học 4 tests lớn và trong mỗi test thì gồm có đầy đủ 4 kỹ năng là nghe, nói, đọc, viết. Cambridge IELTS 15 tuy được phát hành sớm hơn một chút, nhưng giá trị tham khảo vẫn còn rất cao, vì thế nên được nhiều học giả săn đón. Đây là cuốn sách được chọn lọc biên soạn và phát hành nhằm mục đích định hướng ôn thi IELTS một cách tốt nhất cho các học giả. ',
      title: "Cambridge ielts 15",
    },
    {
      id: "6",
      story:
        "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408866184.jpg",
      author: "JK Rowling",
      category: 'Truyện, tiểu thuyết',
      left: '04',
      description: '“Harry Potter và hòn đá phù thủy” là cuốn đầu trong loạt tiểu thuyết “Harry Potter” và là tiểu thuyết đầu tay của J. K Rowling. Cuốn sách mang đến cho mọi người những câu chuyện về cậu bé phù thủy Harry Potter và những thứ xảy ra xung quanh cuộc sống của cậu. Dành cho trẻ em, song lại gợi ra những bài học dành cho cả người lớn. Hành trình với những cuộc phiêu lưu vào thế giới giả tưởng để tạo ra một câu chuyện hấp dẫn cho mọi người.',
      title: "Harry Potter And The Philosophers Stone",

    
    },
    {
      id: "7",
      story:
        "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408855904.jpeg",
      author: "JK Rowling",
      category: 'Truyện, tiểu thuyết',
      left: '01',
      description: '“Harry Potter” là một huyền thoại chắc hẳn ai cũng biết, nó để lại dấu ấn khó quên trong lòng khán giả. Tiếp nối thành công của tập một “Harry Potter và hòn đá phù thủy”, tác giả J. K Rowling cho ra mắt “Harry Potter và Phòng chứa Bí mật” là tập thứ hai trong series truyện nổi tiếng “Harry Potter".',
      title: "Harry Potter and the Chamber of Secrets",

    
    },
    {
      id: "8",
      story:
        "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408855676.jpg",
      author: "JK Rowling",
      category: 'Truyện, tiểu thuyết',
      left: '22',
      description: 'Harry Potter và tên tù nhân ngục Azkaban là một cuốn tiểu thuyết thuộc thể loại giả tưởng được viết bởi J.K. Rowling, đây cũng là tập thứ 3 trong bộ truyện Harry Potter. Quyển sách theo chân Harry Potter, cậu phù thủy nhỏ, trong năm học thứ ba của mình tại Hogwarts. Cùng với hai người bạn thân là Ronald Weasley và Hermione Granger, Harry phát hiện ra Sirius Black, là tù nhân trốn chạy từ ngục Azkaban, người được tin rằng là một trong những tay sai của chúa tể Voldemort.',
      title: "Harry Potter and the Prisoner of Azkaban",

    
    },
    {
      id: "9",
      story:
        "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408855928_thanh_ly.jpeg",
      author: "JK Rowling",
      category: 'Truyện, tiểu thuyết',
      left: '31',
      description: 'Harry Potter và chiếc cốc lửa là một quyển sách thuộc thể loại giả tưởng được viết bởi J.K. Rowling, đây cũng là tập thứ tư trong bộ truyện Harry Potter. Câu chuyện kể về cậu bé Harry Potter, cậu phù thủy nhỏ, trong năm học thứ tư của mình tại Hogwarts cùng với những bí ẩn xung quanh việc thêm tên Harry vào giải đấu Tam Pháp Thuật, buộc cậu phải nỗ lực hết mình để chiến đấu.',
      title: "Harry Potter and the Goblet of Fire",
    },
    {
      id: "10",
      story:
        "https://cdn0.fahasa.com/media/catalog/product/9/7/9781408855935.jpeg",
      author: "JK Rowling",
      category: 'Truyện, tiểu thuyết',
      left: '01',
      description: 'Tập truyện Harry Potter và Hội Phượng Hoàng được xem là dài nhất trong series Harry Potter, dài đến hơn 1300 trang. Bên cạnh đó, nội dung trong bộ truyện này vẫn được khai thác khá giống với các phần truyện trước, khi kể về một năm học của Harry tại ngôi trường phép thuật Hogwarts. Một chi tiết thú vị nữa, đó là người đọc sẽ được chứng kiến khả năng đấu tay đôi giữa Dumbledore và Voldemort, những trận chiến khốc liệt, đi kèm với đó là những cái chết đau thương đã thật sự làm nên sự thú vị cho phần truyện này.',
      title: "Harry Potter and the Order of the Phoenix",
    },

    {
      id: "11",
      story:
        "https://ironhackvietnam.edu.vn/wp-content/uploads/2021/03/sach-hoc-lap-trinh.jpg",
      author: "JK Rowling",
      title: "Tớ học lập trình",
      category: 'Sách công nghệ',
      left: '51',
      description: 'Cẩm nang này hướng dẫn hoàn chỉnh và đơn giản nhất dành cho bạn trẻ bắt đầu học lập trình. Ngôn ngữ lập trình Scratch đặc biệt phù hợp cho bạn trẻ mới học, vì tính tương tác trực quan, đồ họa sống động, ra sản phẩm liền tay mà vẫn đảm bảo khoa học và liên thông tri thức sau này.',
    },
    {
      id: "12",
      story: "https://resources.mindx.edu.vn/uploads/images/sach-day-lap-trinh-co-ban-2.jpg",
      author: 'Andrew Hunt, David Thomas',
      title: "The Pragmatic Programmer",
      category: 'Sách công nghệ',
      left: '07',
      description: 'Cuốn sách “The pragmatic programmer” này được rất nhiều các lập trình viên gạo cội trong giới phần mềm khuyên đọc. Cuốn sách chứa hàng tá các lời khuyên sâu sắc và định hướng rất thực tế cho hầu hết mọi khía cạnh của việc trở thành 1 lập trình viên … tiêu biểu.',
    },
    {
      id: "13",
      story: "https://salt.tikicdn.com/cache/w1200/ts/product/f4/4f/ec/c8d7c174cbca49acb9b8ef31cb690557.jpg",
      author: 'Phạm Văn Ất',
      title: "Giáo trình Kỹ thuật lập trình C căn bản & nâng cao ",
      category: 'Sách công nghệ',
      left: '20',
      description: 'Trong các ngôn ngữ lập trình, ngôn ngữ lập trình C từ lâu đã trở thành ngôn ngữ phổ biến vì tính đa dụng và linh hoạt của nó. Từ một nhà lập trình có tên tuổi cho đến một sinh viên công nghệ thông tin hoặc người yêu thích công nghệ thông tin đều không thể phủ nhận khả năng giải quyết vì xử lý nhanh một bài toán, từ đơn giản đến phức tạp, trên nhiều lĩnh vực khác nhau của ngôn ngữ C. Để đáp ứng nhu cầu mong muốn của nhiều bạn đọc, Nhà xuất bản Thông tin và Truyền thông trân trọng giới thiệu cuốn sách “Giáo trình Kỹ thuật lập trình C: Cơ sở và nâng cao” của PGS. TS Phạm Văn Ất, một tên tuổi quen thuộc với bạn đọc yêu thích ngôn ngữ C.',
    },
    {
      id: "14",
      story: "https://resources.mindx.edu.vn/uploads/images/sach-day-lap-trinh-co-ban-4.jpg",
      author: "Gayle Laakmann McDowell",
      title: 'Cracking The Coding Interview',
      category: 'Sách công nghệ',
      left: '21',
      description: 'Cracking The Coding Interview là cuốn sách được viết bởi kỹ sư phần mềm nổi tiếng Gayle Laakmann McDowell. Cuốn sách tổng hợp những nguyên lý cơ bản của cấu trúc dữ liệu, thuật toán, quy trình và những câu hỏi thường xuất hiện trong các buổi phỏng vấn của những tập đoàn công nghệ lớn như Facebook, Google, Amazon, Microsoft, Apple. Ngoài ra, nó cũng đưa ra một timeline chuẩn mà bạn cần chuẩn bị sẵn trước khi ứng tuyển.',
    },
    {
      id: "15",
      story: "https://salt.tikicdn.com/cache/w1200/ts/product/92/86/16/e04f9b63a395da9bf9f887c9bf5f5eab.jpg",
      author: 'Steve Martin',
      title: 'STEM – Học Viện Lập Trình Viên',
      category: 'Sách công nghệ',
      left: '21',
      description: 'Tại Học viện Lập trình viên, bạn sẽ đi những bước đầu tiên trên con đường trở thành như họ. Bạn sẽ học cách tạo ra âm nhạc, trò chơi, trang Web và hoạt hình. Bạn sẽ học về cách mà máy tính suy nghĩ, cách để ra lệnh cho chúng, cách sử dụng Scratch, viết mã HTML cùng nhiều thứ khác.',
    },
    {
      id: "16",
      story: "https://salt.tikicdn.com/cache/w1200/ts/product/a7/18/47/e4d30a34e0e1970b921e6c8de04515c6.jpg",
      author: 'Ngô Sỹ Liên',
      title: "Đại Việt sử ký toàn thư",
      category: 'Ngô Sỹ Liên',
      left: '12',
      description: '“Đại Việt sử ký toàn thư” ngay từ khi biên soạn thời Hậu Lê đã được tác giả phân chia thành 33 quyển gồm được phân chia thành 3 loại sách: sách Đại Việt sử ký ngoại kỷ toàn thư (5 quyển), sách Đại Việt sử ký bản kỷ toàn thư (9 quyển), bản kỷ thực lục (19 quyển). Ngoại kỷ toàn thư nói về các thời kì từ nhà Ngô trở về trước, sách Đại Việt sử ký bản kỷ toàn thư nói về các thời kì từ nhà Đinh đến thời thuộc Minh, bản kỷ thực lục nói về thời Hậu Lê đến năm 1765. ',
    },
    {
      id: "17",
      story: "https://toplist.vn/images/800px/sup-do-362818.jpg",
      author: 'Jared Diamond',
      title: 'Sụp đổ',
      category: 'Sách lịch sử',
      left: '02',
      description: 'Tác phẩm Sụp Đổ nối tiếp thành công của Súng, Vi Trùng và Thép, đưa người đọc đến với những nền văn minh một thời từng rực rỡ hào quang quá khứ như: đảo Phục Sinh, Maya, Iceland, Vindland, Vikings, … tìm hiểu về những lý do gây nên sự thất bại trong xã hội, ông dựa trên hệ thống 5 điểm được nhất quán ngay từ đầu mà phân tích từng xã hội sẽ không gây nên sự khó hiểu cho bạn đọc không chuyên.',
    },
    {
      id: "18",
      story: "https://toplist.vn/images/800px/nhung-cuoc-chinh-phat-cua-alexander-dai-de-362827.jpg",
      author: "Arrian",
      title: "Những Cuộc Chinh Phạt Của Alexander Đại Đế ",
      category: 'Sách lịch sử',
      left: '01',
      description: 'Nền văn minh Hy Lạp – La Mã luôn là nguồn cảm hứng bất tận cho bất kỳ con người hay thời đại nào sau nó. Những con người thời đại đó như được khoác lên mình ánh hào quang của các vị thần, hào hùng và lãng mạn. Alexander cũng là một trường hợp như vậy – 1 con người vĩ đại với những chiến công lưu danh sử sách, người thống nhất cả 2 lục địa Á –  u. Nhờ quyển sách này chúng ta có thể biết được chi tiết cuộc đời, tính cách, trận chiến của ông. Với lối suy nghĩ quyết đoán, tham vọng và có phần mâu thuẫn trong tính cách được thuật lại vô cùng chi tiết trong sách.',
    },
    {
      id: "19",
      story: "https://toplist.vn/images/800px/bach-khoa-lich-su-the-gioi-362872.jpg",
      author: "Jane Bingham, Fiona Chandler, Sam Taplin",
      title: 'Bách Khoa Lịch Sử Thế Giới',
      category: 'Sách lịch sử',
      left: '02',
      description: 'Cuốn sách đã vẽ nên bức tranh rộng lớn tái hiện cuộc sống của các dân tộc trước đây, giới thiệu về các nền văn minh nổi tiếng nhân loại, những nhân vật biến đổi thế giới, những sự kiện thay đổi tiến trình lịch sử… Với hàng nghìn minh họa ấn tượng và các bản đồ chi tiết, bạn đọc sẽ dễ dàng hình dung chủ đề đang được đề cập.',
    },
    {
      id: "20",
      story: "https://cf.shopee.vn/file/65ec34dd140ddfffac82696b460353a5",
      author: 'Đoàn Quỳnh',
      title: 'Tài liệu chuyên toán - Hình học 11',
      category: 'Sách tham khảo',
      left: '40',
      description: 'Phục vụ việc dạy và học lớp 11 hệ chuyên Toán. Giúp học sinh các lớp chuyên tự học, giúp học sinh khá, giỏi ở các đại trà có tài liệu để tự học, bồi dưỡng thêm',
    },
    {
      id: "21",
      story: "https://cf.shopee.vn/file/27579e0a4516334b6729ccccc3e86a06",
      author: 'Đoàn Quỳnh',
      title: 'Tài liệu chuyên toán - Hình học 11',
      category: 'Sách tham khảo',
      left: '23',
      description: 'Nội dung gồm có: \nChương 1: Lượng giác\nChương 2: Thống kê\nChương 3: Tổ hợp và xác suất\nChương 4: Cấp số và Dãy số\nChương 5: Giới hạn\nChương 6: Đạo hàm\nChương 7: Ứng dụng đạo hàm \nChuyên đề 1: Tổ hợp \nChuyên đề 2: Giới hạn và Dãy số',
    },
    // {
    //   id: ,
    //   story: ,
    //   author: ,
    //   title: ,
    //   category: ,
    //   left: ,
    //   description: ,
    // },
  ]);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
      }}
    >
      
        <FlatList
          numColumns={2}
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            
            return (
              <View style={{ margin: 7 }}>
                <View style={styles.card}>
                  <TouchableHighlight
                    onPress={() => {
                      navigation.navigate("SelectedBook", {
                        selectedBookObj: item,
                      });
                    }}
                  >
                    <Image source={{ uri: item.story }} style={styles.images} />
                  </TouchableHighlight>
                </View>

                <View
                  style={{
                    width: 180,
                    // alignItems: "left",
                  }}
                >
                  <Text
                    numberOfLines={2}
                    style={{
                      marginTop: 16,
                      color: "black",
                      fontSize: 16,
                      fontWeight: "bold",
                      lineHeight: 18,
                      
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text style={{
                    fontSize: 16,
                    color: '#A4A4A4',
                    marginTop: 4,
                  }}>
                    {item.category}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 16,
                      marginTop: 4,
                      color: '#747474'
                  }}>Tác giả: {item.author}</Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 16,
                      marginTop: 4,
                      color: '#747474',
                      
                  }}>Số lượng còn: {item.left}</Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 180,
    backgroundColor: "white",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 6,

  },
  images: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
});

export default ListCard;
